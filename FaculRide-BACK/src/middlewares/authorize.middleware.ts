import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const AuthorizeMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const secret = process.env.JWT_SECRET || "";

  if (!authorization) {
    return res.status(401).json({ message: "Token não fornecido." });
  }

  const token = authorization.replace("Bearer ", "").trim();

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido ou expirado." });
    }

    (req as any).usuario = decoded;
    console.log("✔️ Token validado:", decoded);
    next();
  });
};

