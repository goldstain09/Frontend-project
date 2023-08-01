import React from 'react';
import '../CSS/Home.scss';
import WomensWear from '../Media/WomensWear.jpg';
import MensWear from '../Media/MensWear.jpg';
import jewellery from '../Media/jewellery.jpg';
import Carousel from './HomePageElements/Carousel';
import ProductCard from './HomePageElements/ProductCard';

export default function Home() {
  return (
    <>
      <Carousel WomensWear={WomensWear} MensWear={MensWear} jewellery={jewellery} />

      {/* All Product cards---- */}

      <div className="container HomeProducts">
        <h1>Products for <span>you</span>!</h1>
        <div className="row gap-5 gap-lg-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
}
