import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, HashRouter } from "react-router-dom";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <HashRouter>
      <App />
      </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
