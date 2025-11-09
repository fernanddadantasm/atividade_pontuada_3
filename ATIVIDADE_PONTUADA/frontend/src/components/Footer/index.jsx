import React from 'react';
import './styles.css'; // Importa o CSS local

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {anoAtual} - Todos os direitos reservados.</p>
      <p>Desenvolvido por Fernanda Dantas</p>
      <p>Estrada das Barreiras, Número 150, Rua Veneza - CEP 41182-215 - Salvador - Brasil</p>

      
    </footer>
  );
}

export default Footer;