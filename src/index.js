import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <SidebarProvider>
  <ProductProvider>
  <Router>
    <App />
    </Router>
    </ProductProvider>
    </SidebarProvider>
    </CartProvider>
);
