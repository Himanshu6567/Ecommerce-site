import React from "react";
import ProductListPage from "./component/ProductListPage";
import Footer from "./component/Footer";
import ProductDetail from "./component/ProductDetail";
import Navbar from "./component/Navbar";
import CartPage from "./component/CartPage";
import Error404 from "./component/Error404";
import { Route, Routes } from "react-router-dom";
import Alert from "./component/Alert";

function App() {
  return (
    <div>
      <Alert />
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
