// frontend\src\pages\SobreNós\index.jsx


import React from 'react';
import './styles.css';

function SobreNos() {
  return (
    <div className="sobre-nos-container">
      <h1>Sobre Nós</h1>
      
      <p>
        Este projeto foi desenvolvido como atividade pontuada para a disciplina de 
        Desenvolvimento de Aplicativos.
      </p>
      
      <p>
        O objetivo foi construir um sistema fullstack utilizando as seguintes 
        tecnologias:
      </p>

      <ul>
        <li><strong>Backend:</strong> Node.js, Express e Sequelize</li>
        <li><strong>Frontend:</strong> React, Vite e React Router</li>
        <li><strong>Banco de Dados:</strong> MySQL </li>
        <li><strong>Testes de API:</strong> Thunder Client</li>
      </ul>

      <p>
        Todo o fluxo de cadastro e listagem de Clientes e Produtos 
        está funcionando e conectado ao banco de dados.
      </p>
    </div>
  );
}
export default SobreNos;