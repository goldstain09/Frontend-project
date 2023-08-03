import React, { useEffect, useState } from 'react';
import img from '../Media/icon.jpg';
import '../CSS/Cart.scss';
import { useSelector } from 'react-redux';

export default function Cart() {

    // getting data from store
    const { loading, error, cart } = useSelector((state) => state);


    // it's for quantity
    function countOccurrences(arr) {
        const occurrenceMap = {};
        arr.forEach(item => {
            occurrenceMap[item.title] = (occurrenceMap[item.title] || 0) + 1;
        });
        return occurrenceMap;
    }

    useEffect(() => {
        let counts = countOccurrences(cart);
        // it gives an object with keys of title so, I converted it into an array for checking...
        const countsArray = Object.keys(counts).map((key) => ({
            name: key,
            count: counts[key],
        }));

        

        // cart.forEach((item) => {
        //         if (item.title == countsArray.map((itemm) => {return itemm.name})) {
        //             console.log('yesd');
        //         }
               
        // })
    }, [cart.length])


    return (
        <>
            <div className="container-fluid cartPage">
                {
                    cart.length > 0 ? cart.map((item, index) => (
                        <div className="row" key={index}>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <img src={item.image} alt="---" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <h3><i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"> {item.rating.rate}</i>
                                </h3>
                                <h2><span>${(item.price + 25).toFixed(2)}</span> ${item.price}</h2>
                                <div className="d-flex">
                                    <button
                                        // onClick={' remove krana'} 
                                        className='btn btn-danger'>
                                        <i className="bi bi-trash3"></i> Remove</button>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <div>
                                    <button>-</button>
                                    <h1></h1>
                                    <button
                                        onClick={() => {

                                        }}>+</button>
                                </div>
                            </div>
                        </div>

                    )) : (<> No products ADDEd</>)
                }

            </div>
        </>
    )
}
