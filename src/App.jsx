import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      {/* Home Page and Product List */}
      <Route path= "/" element= {<Products />} />
      {/* Individual Products */}
    <Route path= "product/:id" element= {<ProductPage />} />
      <Route path= "*" element= {<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}