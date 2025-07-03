import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartView from '../src/pages/CartView'
import HomeView from './pages/HomeView'
import ProductView from './pages/ProductView'
import LoginView from './pages/LoginView'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/product" element={<ProductView />} />
      </Routes>
    </Router>
  )
}

export default App
