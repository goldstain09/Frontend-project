import React, { useEffect } from 'react';
import '../CSS/Home.scss';
import WomensWear from '../Media/WomensWear.jpg';
import MensWear from '../Media/MensWear.jpg';
import jewellery from '../Media/jewellery.jpg';
import Carousel from './HomePageElements/Carousel';
import ProductCard from './HomePageElements/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataStartAc_Fn } from '../Redux/Actions';

export default function Home() {


  // for dispatching data
  const dispatch = useDispatch();

  // function called only once for getting all data from APi.
  useEffect(() => {
    dispatch(getAllDataStartAc_Fn());
  }, []);

  // getting data using useSelector() with destructuring
  const { loading, error, allData } = useSelector((state) => state);


  // Managing Error
  if(error){
    return(<>
    
    </>)
  }



  // Managing Loading effects
  if(loading){
    return(<>
    <h1>Loading</h1>
    </>)
  }

  return (
    <>
      <Carousel WomensWear={WomensWear} MensWear={MensWear} jewellery={jewellery} />

      {/* All Product cards---- */}

      <div className="container HomeProducts">
        <h1>Products for <span>you</span>!</h1>
        <div className="row gap-5 gap-lg-4">
          {
            allData.length > 0 ? allData.map((item, index)=>(
              <ProductCard item={item} key={index}/>
            )) : <div>No data</div>
          }
        </div>
      </div>
    </>
  )
}
