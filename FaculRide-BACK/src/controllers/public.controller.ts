// src/controllers/public.controller.ts
import { Request, Response } from "express";
import { fn, col, where } from "sequelize";
import { UsuarioModel } from "../models/usuario.model";
import { ViagemModel } from "../models/viagem.model";
import { AvaliacaoModel } from "../models/avaliacao.model";
import { LogAcessoModel } from "../models/logAcesso.model";

export const publicStats = async (_req: Request, res: Response): Promise<void> => {
  try {
    // 1) Contagem de usuários (case-insensitive)
    const [motoristas, passageiros] = await Promise.all([
      UsuarioModel.count({
        where: where(fn("LOWER", col("tipoUsuario")), "motorista"),
      }),
      UsuarioModel.count({
        where: where(fn("LOWER", col("tipoUsuario")), "passageiro"),
      }),
    ]);

    // 2) Viagens por dia da semana (seg..dom)
    const counts = [0, 0, 0, 0, 0, 0, 0];
    const viagens = await ViagemModel.findAll(); // pega tudo para não dar erro se faltar coluna
    viagens.forEach(v => {
      const d = v.get("createdAt") as Date | null;
      if (d) {
        const wd = new Date(d).getDay();    // 0 = dom .. 6 = sáb
        const idx = wd === 0 ? 6 : wd - 1; // 0 = seg .. 6 = dom
        counts[idx] += 1;
      }
    });

    // Fallback: se não houver viagens, usa logs de acesso
    if (counts.every(n => n === 0)) {
      const logs = await LogAcessoModel.findAll();
      logs.forEach(l => {
        const d = l.get("dataAcesso") as Date | null;
        if (d) {
          const wd = new Date(d).getDay();
          const idx = wd === 0 ? 6 : wd - 1;
          counts[idx] += 1;
        }
      });
    }

    // 3) Média de avaliações
    const avs = await AvaliacaoModel.findAll();
    const notas = avs
      .map(a => Number(a.get("Estrelas")))
      .filter(n => !isNaN(n));
    const avg = notas.length
      ? Math.round((notas.reduce((a, b) => a + b, 0) / notas.length) * 10) / 10
      : 0;

    // ✅ resposta sem return (Promise<void>)
    res.json({
      usuarios: { motoristas, passageiros },
      viagensPorDia: counts,
      mediaAvaliacoes: avg,
    });
  } catch (e) {
    console.error("[/api/public/stats] erro:", e);
    res.status(500).json({ erro: "Erro ao calcular estatísticas públicas" });
  }
};
