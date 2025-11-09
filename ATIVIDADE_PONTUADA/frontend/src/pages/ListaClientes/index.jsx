// frontend\src\pages\ListaClientes\index.jsx



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

function ListaClientes() {
  
  const [clientes, setClientes] = useState([]); // Começa como um array vazio

 
  useEffect(() => {
    async function carregarClientes() {
      try {
       
        const response = await api.get('/clientes');
        setClientes(response.data); // Coloca os dados da resposta no estado
      } catch (error) {
        console.error("Erro ao carregar clientes:", error);
        toast.error("Não foi possível carregar os clientes.");
      }
    }

    carregarClientes();
  }, []); 

  return (
    <div className="lista-container">
      <div className="lista-header">
        <h1>Lista de Clientes</h1>
        <Link to="/clientes/cadastrar" className="btn-novo">
          + Novo Cliente
        </Link>
      </div>
      
      <table className="tabela-dados">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.endereco}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {clientes.length === 0 && (
        <p className="lista-vazia">Nenhum cliente cadastrado ainda.</p>
      )}
    </div>
  );
}

export default ListaClientes;