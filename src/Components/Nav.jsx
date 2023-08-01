import React from 'react';
import logo from '../Media/logo.png';
import '../CSS/Nav.scss';
import { NavLink } from 'react-router-dom';

export default function Nav() {



    // fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    // https://fakestoreapi.com/products

    return (
        <>
            <div className="container-fluid fixed-top bg-none mnvbar">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <a href="/" className="d-flex align-items-center col-1 mb-2 mb-md-0">
                        <img src={logo} alt="logo" />
                    </a>


                    <ul className="nav col-8 mb-2 justify-content-center mb-md-0 gap-3">
                        <li><NavLink to={'/'} className="nav-link px-2">Home</NavLink></li>
                        <li><NavLink to={'/mens'} className="nav-link px-2">Men's Wear</NavLink></li>
                        <li><NavLink to={'/womens'} className="nav-link px-2">Women's Wear</NavLink></li>
                        <li><NavLink to={'/jewellery'} className="nav-link px-2">Jewellery</NavLink></li>
                        <li><NavLink to={'/electronics'} className="nav-link px-2">Electronics</NavLink></li>
                       

                    </ul>
                    <div className='col-1'>
                        <input type="search" placeholder='Search'/>
                    </div>
                    <div className="col-1 text-end">
                        <button type="button" className="btn btn-outline-primary me-2"><i class="bi bi-cart3"></i> Cart</button>
                    </div>
                </header>
            </div>
            {/* -------------------------------------------------------------------------------- */}
            <div className='container-fluid fixed-top bg-none mnvbar_MobileView'>
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <a href="/" className="d-flex align-items-center col-1 mb-2 mb-md-0">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className='col-5 text-end'>
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <i className="bi bi-columns-gap"></i>
                        </button>
                    </div>
                    <div className="col-12">
                        <input type="search" placeholder='Search'/>
                    </div>
                </header>
            </div>


            {/* canvas */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <a href="/" className="d-flex align-items-center col-1 mb-2 mb-md-0">
                        <img src={logo} alt="logo" />
                    </a>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    <ul className="nav col-8 mb-2 justify-content-center mb-md-0 gap-3">
                        <li aria-label="Close" data-bs-dismiss="offcanvas"><NavLink to={'/'} className="nav-link px-2">Home</NavLink></li>
                        <li aria-label="Close" data-bs-dismiss="offcanvas"><NavLink to={'/mens'} className="nav-link px-2">Men's Wear</NavLink></li>
                        <li aria-label="Close" data-bs-dismiss="offcanvas"><NavLink to={'/womens'} className="nav-link px-2">Women's Wear</NavLink></li>
                        <li aria-label="Close" data-bs-dismiss="offcanvas"><NavLink to={'/jewellery'} className="nav-link px-2">Jewellery</NavLink></li>
                        <li aria-label="Close" data-bs-dismiss="offcanvas"><NavLink to={'/electronics'} className="nav-link px-2">Electronics</NavLink></li>
                        
                    </ul>
                    <div className="col-1 text-end">
                        <button type="button" className="btn btn-outline-primary me-2"><i class="bi bi-cart3"></i> Cart</button>
                    </div>
                </div>
            </div>
            {/* canvas */}
        </>
    )
}

