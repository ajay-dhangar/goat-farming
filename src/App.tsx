import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ProtectedRoute from './components/auth/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/goat-farming/auth" element={<Auth />} />
            <Route element={<Layout />}>
              <Route path="/goat-farming/" element={<Home />} />
              <Route path="/goat-farming/products" element={<Products />} />
              <Route path="/goat-farming/about" element={<About />} />
              <Route path="/goat-farming/contact" element={<Contact />} />
              <Route
                path="/goat-farming/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/goat-farming/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
            </Route>            
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}