// frontend/src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      
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
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
