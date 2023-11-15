import React from "react";
import "../CSS/Footer.scss";
import logo from "../Media/logo.png";
import { Logger } from "sass";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container footer">
        <div className="row d-flex">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <img src={logo} alt="..." />
            <p>Who needs love when there's this thing called shopping....</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <h5>Categories</h5>
            <Link to={"/mens"}>
              <p>Men's Wear</p>
            </Link>
            <Link to={"/womens"}>
              <p>Women's Wear</p>
            </Link>
            <Link to={"/jewellery"}>
              <p>Jewellery</p>
            </Link>
            <Link to={"/electronics"}>
              <p>Electronics</p>
            </Link>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
            <h5>Contact</h5>
            <p>demosiivacartofficial@gmail.com</p>
            <p>demo +91 XXXXX XXXXX</p>
            <p>
              demo Address ABC ___ D Block 000111 <br />
              Delhi, India{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
