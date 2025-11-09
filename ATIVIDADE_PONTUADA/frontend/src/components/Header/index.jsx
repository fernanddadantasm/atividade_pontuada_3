import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Importa o CSS local

function Header() {
  return (
    <header className="header">
      <h2>ATIVIDADE PONTUADA</h2>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/clientes">Listar Clientes</Link></li>
          <li><Link to="/clientes/cadastrar">Cadastrar Cliente</Link></li>
          <li><Link to="/produtos">Listar Produtos</Link></li>
          <li><Link to="/produtos/cadastrar">Cadastrar Produto</Link></li>
          <li><Link to="/sobre-nos">Sobre Nós</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;