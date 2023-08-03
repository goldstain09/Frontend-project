import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './HomePageElements/ProductCard';

export default function MensWear() {

    // getting data from store using  useSelector
    const allData  = useSelector((state) => state.allData);

    // using useState for showing data
    const [MensWear, setMensWear] = useState([]);

    useEffect(()=>{
        const mensWearData = allData.filter((item) => item.category === "men's clothing" );
        setMensWear(mensWearData);
    },[]);


    return (
        <>
        <div className="container">
        <h1><span>68% Off</span> on Men's Wear...</h1>
            <div className="row d-flex">
        {
            MensWear.length > 0 ? MensWear.map((item , index)=>(
            <ProductCard item={item} key={index}/>
            )) : (<></>)
        }
            </div>
        </div>
        </>
    )
}
