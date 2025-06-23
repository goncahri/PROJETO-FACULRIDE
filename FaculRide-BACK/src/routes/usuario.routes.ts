import express from "express";
import {
  cadastrarUsuario,
  filtrarUsuarios,
  loginUsuario,
  buscarUsuarioPorId,
  atualizarUsuario,
  deletarUsuario
} from "../controllers/usuario.controller";
import { Iusuario, IusuarioFiltros } from "../interfaces/Iusuario";
import { AuthorizeMiddleware } from "../middlewares/authorize.middleware";

const router = express.Router();

// ROTAS PÚBLICAS — Cadastro e Login
router.post("/", async (req, res) => {
  const usuario = req.body as Iusuario;

  try {
    const resposta = await cadastrarUsuario(usuario);
    res.status(201).json(resposta);
  } catch (error: any) {
    res.status(400).json({ erro: error.message || "Erro ao cadastrar usuário" });
  }
});

router.post("/login", (req, res) => {
  loginUsuario(req, res);
});

// A partir daqui todas as rotas são protegidas
router.use(AuthorizeMiddleware as any);

// GET Listar ou filtrar usuários 
router.get("/", async (req, res) => {
  const filtros = req.query as unknown as IusuarioFiltros;

  try {
    const resposta = await filtrarUsuarios(filtros);
    res.status(200).json(resposta);
  } catch (error: any) {
    res.status(500).json({ erro: error.message });
  }
});

// GET Buscar usuário por ID 
router.get("/:id", (req, res) => {
  buscarUsuarioPorId(req, res);
});

// PUT Atualizar dados do usuário 
router.put("/:id", (req, res) => {
  atualizarUsuario(req, res);
});

// DELETE usuário 
router.delete("/:id", (req, res) => {
  deletarUsuario(req, res);
});

export default router;
