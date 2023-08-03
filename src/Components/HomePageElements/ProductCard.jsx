import React from 'react';
import './CSS/ProductCard.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { movingToProductStartAc_Fn } from '../../Redux/Actions';

export default function ProductCard({item}) {

    // for dispatch
    const dispatch = useDispatch();



    return (
        <>
            <div className="card CourseCard col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" style={{ width: '30%' }}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <div className='stars'>
                    <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"> {item.rating.rate}</i>
                    </div>
                    <div className='prices'>
                        <h6>Price: <span style={{ textDecorationLine: 'line-through' }}>${(item.price + 25).toFixed(2)}</span> ${item.price}</h6>
                    </div>
                    <div className="availables">
                        <h4>Available:{item.rating.count}</h4>
                    </div>
                    <Link 
                    to={`/product/${item.id}`} 
                    className="btn btn-outline-primary"
                    onClick={()=>{
                        // I could have done this using 'useParam' as well, but here, I created a separate action for this..
                        dispatch(movingToProductStartAc_Fn(item));
                    }} 
                    >Buy Now</Link>
                </div>
            </div>
        </>
    )
}
