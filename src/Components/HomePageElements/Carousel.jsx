import React from "react";
import "./CSS/Carousel.scss";
import { useNavigate } from "react-router-dom";

export default function Carousel({ MensWear, WomensWear, jewellery }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className=" carousel slide Carousel_Container"
      >
        {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
        <div className="carousel-inner container-fluid">
          <div className="carousel-item active">
            <img src={WomensWear} className="d-block w-100" alt="..." />
            <div className="carouselContent">
              <h1>
                Grab upto <span>55% off</span> on
              </h1>
              <h1>Women's wear</h1>
              <button
                onClick={() => {
                  navigate("/womens");
                }}
                className="btn btn-outline-primary"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={MensWear} className="d-block w-100" alt="..." />
            <div className="carouselContent">
              <h1>
                Mega Sale upto <span>68% off</span>
              </h1>
              <h1>on Men's wear</h1>
              <button
                onClick={() => {
                  navigate("/mens");
                }}
                className="btn btn-outline-primary"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={jewellery} className="d-block w-100" alt="..." />
            <div className="carouselContent">
              <h1>
                Grab upto <span>35% off</span> on
              </h1>
              <h1>Jewellery</h1>
              <button
                onClick={() => {
                  navigate("/jewellery");
                }}
                className="btn btn-outline-primary"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button> */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
