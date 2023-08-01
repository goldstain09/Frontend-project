import React from 'react';
import '../CSS/ProductPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import img from '../Media/icon.jpg';

export default function ProductPage() {


  return (
    <>
    <div className="container-fluid productPage">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <img src={img} alt="" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                <h1>Product Name</h1>
                <p>Product Description dfdsf d fds dsf dfds      dfdfdsfdsfdsfdsfdf dfdf dsfsdfds d d dsf ds sdfdsf sd sd fdfds dfdsfdsfdsf ddsfdsfdsfdsfsd</p>
                <h3>Ratings</h3>
                <h2><span>$700</span> $400</h2>
                <div className="d-flex">
                    <Link to={'/cart'} className='btn btn-outline-primary'>Buy Now</Link>
                    <button onClick={' add krana ye product navigate ni krana khi pr '} className='btn btn-primary'>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
