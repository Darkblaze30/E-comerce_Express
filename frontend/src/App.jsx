import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartView from '../src/pages/CartView'
import ProductView from './pages/ProductView'
import LoginView from './pages/LoginView'
import HomeViewWrapper from './pages/HomeViewWrapper'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeViewWrapper />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/product" element={<ProductView />} />
      </Routes>
    </Router>
  )
}

export default App
