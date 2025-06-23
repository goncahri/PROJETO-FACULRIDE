import { Iviagem } from "../interfaces/Iviagem";
import { ViagemModel } from "../models/viagem.model";
import { UsuarioModel } from "../models/usuario.model";

// GET viagem
export const listAll = (): Promise<Iviagem[]> => {
  return ViagemModel.findAll({
    include: [
      {
        model: UsuarioModel,
        as: 'usuario',
        attributes: ['nome', 'email', 'telefone', 'genero']
      }
    ]
  });
};

// POST viagem
export const create = (dados: Iviagem): Promise<Iviagem> => {
  return ViagemModel.create(dados);
};

// PUT viagem
export const update = (id: number, dados: Iviagem): Promise<Iviagem | null> => {
  return ViagemModel.findByPk(id).then(viagem => {
    if (!viagem) return null;
    return viagem.update(dados);
  });
};

// DELETE viagem
export const remove = (id: number): Promise<boolean> => {
  return ViagemModel.findByPk(id).then(viagem => {
    if (!viagem) return false;
    return viagem.destroy().then(() => true);
  });
};
