// frontend/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import Home from './pages/Home';
import ListaClientes from './pages/ListaClientes';
import CadastroCliente from './pages/CadastroCliente';
import ListaProdutos from './pages/ListaProdutos';
import CadastroProduto from './pages/CadastroProduto';
import SobreNos from './pages/SobreNos';
// Configuração das rotas
const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      
      { path: "/", element: <Home /> },
      { path: "/clientes", element: <ListaClientes /> },
      { path: "/clientes/cadastrar", element: <CadastroCliente /> },
      { path: "/produtos", element: <ListaProdutos /> },
      { path: "/produtos/cadastrar", element: <CadastroProduto /> },
      { path: "/sobre-nos", element: <SobreNos /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
