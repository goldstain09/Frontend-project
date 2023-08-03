import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './HomePageElements/ProductCard';

export default function Electronics() {

    // getting data from store using  useSelector
    const allData  = useSelector((state) => state.allData);

    // using useState for showing data
    const [electronics, setElectronics] = useState([]);

    useEffect(()=>{
        const electronicsData = allData.filter((item) => item.category === "electronics" );
        setElectronics(electronicsData);
    },[]);


    return (
        <>
        <div className="container">
        <h1>Electronics</h1>
            <div className="row d-flex">
        {
            electronics.length > 0 ? electronics.map((item , index)=>(
            <ProductCard item={item} key={index}/>
            )) : (<></>)
        }
            </div>
        </div>
        </>
    )
}
