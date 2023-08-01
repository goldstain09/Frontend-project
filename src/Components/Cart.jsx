import React from 'react';
import img from '../Media/icon.jpg';
import '../CSS/Cart.scss';
import { Link } from 'react-router-dom';

export default function Cart() {
    return (
        <>
            <div className="container-fluid cartPage">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <h1>Product Name</h1>
                        <p>Product Description dfdsf d fds dsf dfds      dfdfdsfdsfdsfdsfdf dfdf dsfsdfds d d dsf ds sdfdsf sd sd fdfds dfdsfdsfdsf ddsfdsfdsfdsfsd</p>
                        <h3>Ratings</h3>
                        <h2><span>$700</span> $400</h2>
                        <div className="d-flex">
                            <button onClick={' remove krana'} className='btn btn-danger'><i class="bi bi-trash3"></i> Remove</button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div>
                            <button>-</button> <h1>1</h1> <button>+</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
