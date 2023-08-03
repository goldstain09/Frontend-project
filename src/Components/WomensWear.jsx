import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './HomePageElements/ProductCard';

export default function WomensWear() {

    // getting data from store using  useSelector
    const allData  = useSelector((state) => state.allData);

    // using useState for showing data
    const [WomensWear, setWomensWear] = useState([]);

    useEffect(()=>{
        const womensWearData = allData.filter((item) => item.category === "women's clothing" );
        setWomensWear(womensWearData);
    },[]);


    return (
        <>
        <div className="container">
        <h1><span>55% Off</span> on Women's Wear...</h1>
            <div className="row d-flex">
        {
            WomensWear.length > 0 ? WomensWear.map((item , index)=>(
            <ProductCard item={item} key={index}/>
            )) : (<></>)
        }
            </div>
        </div>
        </>
    )
}
