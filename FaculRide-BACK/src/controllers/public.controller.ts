import { Request, Response } from "express";
import { UsuarioModel } from "../models/usuario.model";
import { ViagemModel } from "../models/viagem.model";
import { AvaliacaoModel } from "../models/avaliacao.model";
import { LogAcessoModel } from "../models/logAcesso.model";

export const publicStats = async (_req: Request, res: Response): Promise<void> => {
  try {
    const [motoristas, passageiros] = await Promise.all([
      UsuarioModel.count({ where: { tipoUsuario: "motorista" } }),
      UsuarioModel.count({ where: { tipoUsuario: "passageiro" } }),
    ]);

    const counts = [0, 0, 0, 0, 0, 0, 0]; // seg..dom
    const viagens = await ViagemModel.findAll({ attributes: ["createdAt"] });
    viagens.forEach(v => {
      const d = v.get("createdAt") as Date | null;
      if (d) {
        const wd = new Date(d).getDay();        // 0 dom..6 sáb
        const idx = wd === 0 ? 6 : wd - 1;      // 0 seg..6 dom
        counts[idx] += 1;
      }
    });

    if (counts.every(n => n === 0)) {
      const logs = await LogAcessoModel.findAll({ attributes: ["dataAcesso"] });
      logs.forEach(l => {
        const d = l.get("dataAcesso") as Date | null;
        if (d) {
          const wd = new Date(d).getDay();
          const idx = wd === 0 ? 6 : wd - 1;
          counts[idx] += 1;
        }
      });
    }

    const avs = await AvaliacaoModel.findAll({ attributes: ["Estrelas"] });
    const stars = avs.map(a => Number(a.get("Estrelas"))).filter(n => !isNaN(n));
    const avg = stars.length ? Math.round((stars.reduce((a,b)=>a+b,0)/stars.length)*10)/10 : 0;

    res.json({
      usuarios: { motoristas, passageiros },
      viagensPorDia: counts,     // [seg..dom]
      mediaAvaliacoes: avg       // 0..5
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ erro: "Erro ao calcular estatísticas públicas" });
  }
};
