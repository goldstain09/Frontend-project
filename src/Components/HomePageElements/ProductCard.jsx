import React from 'react';
import './CSS/ProductCard.scss';
import img from './jewellery.jpg';

export default function ProductCard() {
    return (
        <>
            <div className="card CourseCard col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" style={{ width: '30%' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Machine Learning and AI using Python</h5>
                    <p className="card-text">Machine Learning Deep Learning Clustering Decision Trees</p>
                    <div className='stars'>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <div className='prices'>
                        <h6>Instructor led: <span style={{ textDecorationLine: 'line-through' }}>40,000</span> 30,000</h6>
                        <h6>Online:  <span style={{ textDecorationLine: 'line-through' }}>40,000</span> 30,000</h6>
                    </div>
                    <div className="students">
                        <h4>Students:1000</h4>
                    </div>
                    <a href="#" className="btn btn-outline-primary">Buy Now</a>
                </div>
            </div>
        </>
    )
}
