import express, { Request, Response } from "express";
import { AvaliacaoModel } from "../models/avaliacao.model";
import { AuthorizeMiddleware } from "../middlewares/authorize.middleware";

const router = express.Router();

// Aplica autenticação JWT para todas as rotas abaixo
router.use('/', AuthorizeMiddleware);

// GET avaliações
router.get("/", (req: Request, res: Response) => {
  AvaliacaoModel.findAll()
    .then(avaliacoes => res.status(200).json(avaliacoes))
    .catch(error =>
      res.status(500).json({ erro: error.message || "Erro ao buscar avaliações" })
    );
});

// POST avaliação
router.post("/", (req: Request, res: Response) => {
  const { ID_Avaliador, ID_Avaliado, Comentario, Estrelas } = req.body;

  AvaliacaoModel.create({
    ID_Avaliador,
    ID_Avaliado,
    Comentario,
    Estrelas
  })
    .then(nova =>
      res.status(201).json({
        mensagem: "Avaliação criada com sucesso",
        avaliacao: nova
      })
    )
    .catch(error =>
      res.status(500).json({ erro: error.message || "Erro ao criar avaliação" })
    );
});

// PUT avaliação
router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { Comentario, Estrelas } = req.body;

  AvaliacaoModel.findByPk(id)
    .then(avaliacao => {
      if (!avaliacao) {
        return res.status(404).json({ erro: "Avaliação não encontrada." });
      }

      return avaliacao
        .update({
          Comentario,
          Estrelas
        })
        .then(() =>
          res.status(200).json({
            mensagem: "Avaliação atualizada com sucesso.",
            avaliacao
          })
        );
    })
    .catch(error =>
      res.status(500).json({ erro: error.message || "Erro ao atualizar avaliação" })
    );
});

// DELETE avaliação
router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  AvaliacaoModel.findByPk(id)
    .then(avaliacao => {
      if (!avaliacao) {
        return res.status(404).json({ erro: "Avaliação não encontrada." });
      }

      return avaliacao.destroy().then(() =>
        res.status(200).json({ mensagem: "Avaliação deletada com sucesso." })
      );
    })
    .catch(error =>
      res.status(500).json({ erro: error.message || "Erro ao deletar avaliação" })
    );
});

export default router;
