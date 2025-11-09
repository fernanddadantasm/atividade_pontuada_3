// backend/config/database.js

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('db_atividade_pontuada', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Testar a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados bem-sucedida! ✅');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados: ❌', error);
  }
}

testConnection();

module.exports = sequelize;