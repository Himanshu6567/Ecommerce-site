import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AlertProvider from "./Context/AlertContext";
import App from "./App";
import CartProvider from "./Context/CartContext";
import "./index.css";
import ProductProvider from "./Context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <AlertProvider>
      <BrowserRouter>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </BrowserRouter>
    </AlertProvider>
  </CartProvider>
);
