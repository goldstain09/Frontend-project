import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import ProductPage from "./Components/ProductPage";
import Cart from "./Components/Cart";
import MensWear from "./Components/MensWear";
import WomensWear from "./Components/WomensWear";
import Jewellery from "./Components/Jewellery";
import Electronics from "./Components/Electronics";

function App() {


  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const location = useLocation();
  // Scroll to top whenever the location or route changes
  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/Frontend-project" />
        <Route path="/product" >
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route element={<Cart />} path="/cart" />
        <Route element={<MensWear />} path="/mens" />
        <Route element={<WomensWear />} path="/womens" />
        <Route element={<Jewellery />} path="/jewellery" />
        <Route element={<Electronics />} path="/electronics" />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
