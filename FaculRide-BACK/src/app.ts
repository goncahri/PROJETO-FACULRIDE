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

// Importa models e associações
import "./models/usuario.model";
import "./models/viagem.model";
import "./models/associations";

const app = express();

/** -------- CORS explícito (ajuste pontual) -------- */
const allowedOrigins = [
  "http://localhost:4200",
  "https://faculride.vercel.app",
];

app.use(
  cors({
    origin: (origin, cb) => {
      // permite chamadas sem origin (ex: curl) e as da lista
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
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
