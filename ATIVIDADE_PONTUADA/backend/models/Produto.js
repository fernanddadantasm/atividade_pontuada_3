// backend/models/Produto.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa a conexão

const Produto = sequelize.define('Produto', {
  // 'id' é automático
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lote: {
    type: DataTypes.STRING
  },
  validade: {
    type: DataTypes.STRING
  },
  categoria: {
    type: DataTypes.STRING
  },
  quantidade: {
    type: DataTypes.INTEGER // 'int' vira INTEGER
  }
}, {
  tableName: 'produtos' 
});

module.exports = Produto;