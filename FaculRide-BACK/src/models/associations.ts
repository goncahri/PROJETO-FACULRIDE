import { UsuarioModel } from './usuario.model';
import { ViagemModel } from './viagem.model';

// Um usuário tem muitas viagens
UsuarioModel.hasMany(ViagemModel, {
  foreignKey: 'idUsuario',
  as: 'viagens'
});

// Uma viagem pertence a um usuário
ViagemModel.belongsTo(UsuarioModel, {
  foreignKey: 'idUsuario',
  as: 'usuario'
});


