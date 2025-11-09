// frontend/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importa o CSS Global
import './index.css';

// Importa o Layout (App) e todas as Páginas
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
    path: "/", // Rota "mãe"
    element: <App />, // O elemento principal é o nosso Layout
    children: [
      // Rotas "filhas" que serão renderizadas dentro do <Outlet>
      { path: "/", element: <Home /> },
      { path: "/clientes", element: <ListaClientes /> },
      { path: "/clientes/cadastrar", element: <CadastroCliente /> },
      { path: "/produtos", element: <ListaProdutos /> },
      { path: "/produtos/cadastrar", element: <CadastroProduto /> },
      { path: "/sobre-nos", element: <SobreNos /> },
    ]
  },
]);

// Renderiza o Aplicativo usando o Provedor de Rotas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);