// frontend/src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom'; // O "miolo" da página
import Header from './components/Header';
import Footer from './components/Footer';

// Imports para as mensagens (Toastify)
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      
      {/* Container para as mensagens de notificação */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      {/* A classe "main-content" vem do nosso index.css global */}
      <main className="main-content">
        {/* <Outlet> é onde o React vai encaixar a página atual (Home, Lista, etc) */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;