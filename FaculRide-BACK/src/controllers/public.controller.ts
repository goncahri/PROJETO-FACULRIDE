// src/controllers/public.controller.ts
import { RequestHandler } from "express";
import { UsuarioModel } from "../models/usuario.model";
import { ViagemModel } from "../models/viagem.model";
import { AvaliacaoModel } from "../models/avaliacao.model";
import { LogAcessoModel } from "../models/logAcesso.model";

export const publicStats: RequestHandler = async (_req, res) => {
  try {
    // 1) Contagem por tipo
    const [motoristas, passageiros] = await Promise.all([
      UsuarioModel.count({ where: { tipoUsuario: "motorista" } }),
      UsuarioModel.count({ where: { tipoUsuario: "passageiro" } }),
    ]);

    // 2) Viagens por dia da semana (seg..dom)
    const counts = [0, 0, 0, 0, 0, 0, 0];
    const viagens = await ViagemModel.findAll({ attributes: ["createdAt"] });

    viagens.forEach((v) => {
      const d = v.get("createdAt") as Date | null;
      if (d) {
        const wd = new Date(d).getDay();       // 0(dom) .. 6(sáb)
        const idx = wd === 0 ? 6 : wd - 1;     // 0(seg) .. 6(dom)
        counts[idx] += 1;
      }
    });

    // fallback com Log de acesso
    if (counts.every((n) => n === 0)) {
      const logs = await LogAcessoModel.findAll({ attributes: ["dataAcesso"] });
      logs.forEach((l) => {
        const d = l.get("dataAcesso") as Date | null;
        if (d) {
          const wd = new Date(d).getDay();
          const idx = wd === 0 ? 6 : wd - 1;
          counts[idx] += 1;
        }
      });
    }

    // 3) Média de avaliações (0..5, 1 casa)
    const avs = await AvaliacaoModel.findAll({
      attributes: ["Estrelas"],
      raw: true,
    });

    const notas = (avs as Array<{ Estrelas?: any }>)
      .map((a) => Number(a["Estrelas"] ?? a.Estrelas)) // blindagem
      .filter((n) => !isNaN(n));

    const media =
      notas.length > 0
        ? Math.round(
            (notas.reduce((acc, n) => acc + n, 0) / notas.length) * 10
          ) / 10
        : 0;

    // 🔹 importante: não usar `return res.json(...)`
    res.json({
      usuarios: { motoristas, passageiros },
      viagensPorDia: counts,
      mediaAvaliacoes: media,
    });
  } catch (e) {
    console.error(e);
    // idem: sem `return` aqui
    res.status(500).json({ erro: "Erro ao calcular estatísticas públicas" });
  }
};
