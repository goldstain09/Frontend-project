import React from "react";
import "../CSS/ProductPage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCartStartAc_Fn } from "../Redux/Actions";
import { HashLoader } from "react-spinners";

export default function ProductPage() {
  // for dispatch
  const dispatch = useDispatch();

  //function for notification for added to cart
  const notificationForAdded = (time) => {
    let element = document.getElementById("notification");
    element.style.display = "block";

    setTimeout(() => {
      element.style.display = "none";
    }, time);
  };

  // getting product Data + loading + as well as error
  const { productData, loading, error } = useSelector((state) => state);

  // managing loading
  if (loading) {
    return (
      <>
        <div
          style={{
            width: "99vw",
            height: "99vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <HashLoader style={{ position: "fixed" }} color="#97ddf4" />
        </div>
      </>
    );
  }

  //  managing error
  if (error) {
    return (
      <>
        <div
          style={{
            width: "98vw",
            height: "99vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <h1
            className="h1"
            style={{ color: "#97ddf4", fontFamily: "'Raleway', sans-serif" }}
          >
            Something went wrong... <i class="bi bi-emoji-frown"></i>
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid productPage">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <img src={productData.image} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <h1>{productData.title}</h1>
            <p>{productData.description}</p>
            <h3>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning">
                {" "}
                {productData.rating.rate}
              </i>
            </h3>
            <h2>
              <span>${(productData.price + 25).toFixed(2)}</span> $
              {productData.price}
            </h2>
            <div className="d-flex">
              <Link
                to={"/cart"}
                className="btn btn-outline-primary"
                onClick={() => {
                  dispatch(addToCartStartAc_Fn(productData));
                }}
              >
                Buy Now
              </Link>
              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(addToCartStartAc_Fn(productData));
                  notificationForAdded(2500);
                }}
              >
                Add to Cart
              </button>
            </div>
            <div id="notification" style={{ display: "none" }}>
              <p>Added Successfully...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
