// backend/index.js

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Cliente = require('./models/Cliente');
const Produto = require('./models/Produto');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API da ATIVIDADE_PONTUADA está rodando! 🚀');
});


// 1. Cadastrar Cliente (POST)
app.post('/clientes', async (req, res) => {
  try {
    const novoCliente = await Cliente.create(req.body);
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 2. Listar Clientes (GET)
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Cadastrar Produto (POST)
app.post('/produtos', async (req, res) => {
  try {
    const novoProduto = await Produto.create(req.body);
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4. Listar Produtos (GET)
app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// FIM DAS NOVAS ROTAS 

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
  
  sequelize.sync({ force: false })
    .then(() => {
      console.log('Tabelas sincronizadas com o banco de dados. 👍');
    })
    .catch((error) => {
      console.error('Erro ao sincronizar tabelas: 👎', error);
    });

});
