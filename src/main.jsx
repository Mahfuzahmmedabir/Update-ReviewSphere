import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router.jsx';
import AuthProvider from './context/AuthProvier.jsx';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
