// backend/models/Cliente.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Cliente = sequelize.define('Cliente', {

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
}, {
  tableName: 'clientes' 
});


module.exports = Cliente;
