import React from 'react';
import '../CSS/ProductPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import img from '../Media/icon.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartStartAc_Fn } from '../Redux/Actions';

export default function ProductPage() {

    // for dispatch
    const dispatch = useDispatch();

    // getting product Data + loading + as well as error
    const { productData, loading, error } = useSelector((state) => state);

    // managing loading
    if (loading) {
        return (<>
            loading
        </>)
    }

    //  managing error
    if (error) {
        return (<>
            {
                console.log(error)
            }
        </>)
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
                        <h3><i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"> {productData.rating.rate}</i>
                        </h3>
                        <h2><span>${(productData.price + 25).toFixed(2)}</span> ${productData.price}</h2>
                        <div className="d-flex">
                            <Link
                                to={'/cart'}
                                className='btn btn-outline-primary'
                                onClick={() => {
                                    dispatch(addToCartStartAc_Fn(productData));
                                }}
                            >Buy Now</Link>
                            <button
                                className='btn btn-primary'
                                onClick={() => {
                                    dispatch(addToCartStartAc_Fn(productData));
                                }}
                            >Add to Cart</button>
                            {/* if someone clicked on same double time then it will didnot addded it only increase no. of quatity */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
