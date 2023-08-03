import React, { useEffect, useState } from 'react';
import '../CSS/Home.scss';
import WomensWear from '../Media/WomensWear.jpg';
import MensWear from '../Media/MensWear.jpg';
import jewellery from '../Media/jewellery.jpg';
import Carousel from './HomePageElements/Carousel';
import ProductCard from './HomePageElements/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataStartAc_Fn } from '../Redux/Actions';
import { HashLoader } from 'react-spinners';

export default function Home() {


  // for dispatching data
  const dispatch = useDispatch();

  // function called only once for getting all data from APi.
  useEffect(() => {
    dispatch(getAllDataStartAc_Fn());
  }, []);

  // getting data using useSelector() with destructuring
  const { loading, error, allData, searchValue } = useSelector((state) => state);



  // for showing items 
  const [items, setItems] = useState([]);

  //if searched items showed then carousel will hide
  const [carouselHide, setCarouselHide] = useState(true);



  useEffect(() => {
    if (searchValue) {
      let searchListItems = allData.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
      setItems(searchListItems);
      setCarouselHide(false);
    }else{
      setItems(allData);
      setCarouselHide(true);
    }
  }, [searchValue.length ,allData])





  // Managing Error
  if (error) {
    return (<>

    </>)
  }



  // Managing Loading effects
  if (loading) {
    return (<>
      <div style={{width:'99vw',height:'99vh',display:'flex', justifyContent:'center',alignItems:'center', overflow:'hidden'}}>
        <HashLoader  style={{position:'fixed'}}  color='#97ddf4' />
      </div>
    </>)
  }

  return (
    <>
    {
      carouselHide && <Carousel WomensWear={WomensWear} MensWear={MensWear} jewellery={jewellery} />
    }
      {/* All Product cards---- */}
      <div className="container HomeProducts">
        {
          carouselHide ? (<h1>Products for <span>you</span>!</h1>) : (<h1>Search <span>Results</span>!</h1>)
        }
        
        <div className="row gap-5 gap-lg-4">
          {
            items.length > 0 ? items.map((item, index) => (
              <ProductCard item={item} key={index} />
            )) : <div>No data</div>
          }
        </div>
      </div>


    </>
  )
}
