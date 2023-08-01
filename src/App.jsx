import React from "react";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import ProductPage from "./Components/ProductPage";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductPage />} path="/product" />
        <Route element={<Cart />} path="/cart" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
