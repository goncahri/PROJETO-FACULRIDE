import { Iusuario } from "../interfaces/Iusuario";
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

type UsuarioCreationalAttributes = Optional<Iusuario, "idUsuario" | "cnh">;

export class UsuarioModel extends Model<Iusuario, UsuarioCreationalAttributes> {
  public idUsuario!: number;
  public nome!: string;
  public cpf!: string;
  public ra!: string;
  public dataNascimento!: Date;
  public genero!: boolean;
  public cep!: string;
  public endereco!: string;
  public numero!: string;
  public cidade!: string;
  public estado!: string;
  public email!: string;
  public telefone!: string;
  public senha!: string;
  public tipoUsuario!: "passageiro" | "motorista";
  public cnh?: string;
  public fatec!: string;
}

UsuarioModel.init({
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false
  },
  ra: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  dataNascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  genero: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  cep: {
    type: DataTypes.STRING(9),
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  numero: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  cidade: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(2),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tipoUsuario: {
    type: DataTypes.ENUM("passageiro", "motorista"),
    allowNull: false
  },
  cnh: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  fatec: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  sequelize,
  tableName: "usuario",
  timestamps: false
});
