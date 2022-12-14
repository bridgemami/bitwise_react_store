import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'
import { HashRouter } from "react-router-dom";
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    {/* <App /> */}
    <Header />
    <Products />
    <Footer /> 
    </HashRouter>
  </React.StrictMode>,
)
