import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

// Importação do Swagger
import { setupSwagger } from "./swagger/swagger";

// Importação das rotas
import authRoutes from "./routes/auth.routes";
import usuarioRoutes from "./routes/usuario.routes";
import veiculoRoutes from "./routes/veiculo.routes";
import avaliacaoRoutes from "./routes/avaliacao.routes";
import viagemRoutes from "./routes/viagem.routes";
import logAcessoRoutes from "./routes/logAcesso.routes";
import publicRoutes from "./routes/public.routes"; // 👈 NOVO

// Importa models e associações
import "./models/usuario.model";
import "./models/viagem.model";
import "./models/associations";

const app = express();

/** -------- CORS explícito (ajuste pontual) -------- */
const isAllowedOrigin = (origin?: string | null) => {
  if (!origin) return true; // curl, health checks etc.

  try {
    const url = new URL(origin);

    // localhost (qualquer porta)
    if (url.hostname === "localhost") return true;

    // qualquer subdomínio *.vercel.app (inclui preview deploys)
    if (url.hostname.endsWith(".vercel.app")) return true;

    // domínio fixo, se quiser manter
    if (origin === "https://faculride.vercel.app") return true;

    return false;
  } catch {
    return false;
  }
};

app.use(
  cors({
    origin: (origin, cb) => {
      if (isAllowedOrigin(origin)) return cb(null, true);
      return cb(new Error("Origin not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// responde preflight para qualquer rota
app.options("*", cors());
/** -------------------------------------------------- */

app.use(express.json());

// Configuração do Swagger
setupSwagger(app);

// Rotas públicas
app.use("/api/auth", authRoutes);
app.use("/api/public", publicRoutes); // 👈 NOVO

// Rotas protegidas
app.use("/api/usuario", usuarioRoutes);
app.use("/api/veiculo", veiculoRoutes);
app.use("/api/avaliacao", avaliacaoRoutes);
app.use("/api/viagem", viagemRoutes);
app.use("/api/logacesso", logAcessoRoutes);

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
