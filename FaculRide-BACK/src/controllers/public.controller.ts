// src/controllers/public.controller.ts
import { Request, Response } from "express";
import { fn, col, where } from "sequelize";
import { UsuarioModel } from "../models/usuario.model";
import { AvaliacaoModel } from "../models/avaliacao.model";

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

    // 2) Média de avaliações (0..5, arredondada para 1 casa)
    const avaliacoes = await AvaliacaoModel.findAll({ attributes: ["Estrelas"] });
    const notas = avaliacoes
      .map(a => Number(a.get("Estrelas")))
      .filter(n => !isNaN(n));
    const mediaAvaliacoes = notas.length
      ? Math.round((notas.reduce((a, b) => a + b, 0) / notas.length) * 10) / 10
      : 0;

    res.json({
      totais: { motoristas, passageiros },
      satisfacaoMedia: mediaAvaliacoes,
    });
  } catch (e) {
    console.error("[/api/public/stats] erro:", e);
    res.status(500).json({ erro: "Erro ao calcular estatísticas públicas" });
  }
};
