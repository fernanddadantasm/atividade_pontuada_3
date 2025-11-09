// backend/models/Cliente.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa a conexão

const Cliente = sequelize.define('Cliente', {
  // O 'id' é criado automaticamente
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  telefone: {
    type: DataTypes.STRING
  },
  formaPagamento: {
    type: DataTypes.STRING
  },
  endereco: {
    type: DataTypes.STRING
  }
  // timestamps (createdAt e updatedAt) são automáticos
}, {
  tableName: 'clientes' 
});

module.exports = Cliente;