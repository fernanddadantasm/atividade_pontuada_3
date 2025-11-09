// frontend\src\pages\ListaProdutos\index.jsx



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await api.get('/produtos');
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        toast.error("Não foi possível carregar os produtos.");
      }
    }

    carregarProdutos();
  }, []);

  return (
    <div className="lista-container">
      <div className="lista-header">
        <h1>Lista de Produtos</h1>
        <Link to="/produtos/cadastrar" className="btn-novo">
          + Novo Produto
        </Link>
      </div>
      
      <table className="tabela-dados">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Lote</th>
            <th>Validade</th>
            <th>Categoria</th>
            <th>Qtd.</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.lote}</td>
              <td>{produto.validade}</td>
              <td>{produto.categoria}</td>
              <td>{produto.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {produtos.length === 0 && (
        <p className="lista-vazia">Nenhum produto cadastrado ainda.</p>
      )}
    </div>
  );
}

export default ListaProdutos;