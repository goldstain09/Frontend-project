import React, { useEffect, useState } from 'react';
import '../CSS/Category.scss';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './HomePageElements/ProductCard';
import { getAllDataStartAc_Fn } from '../Redux/Actions';

export default function WomensWear() {

    const dispatch = useDispatch();

    // function called only once for getting all data from APi.
    useEffect(() => {
        dispatch(getAllDataStartAc_Fn());
    }, []);




    // getting data from store using  useSelector
    const allData= useSelector((state) => state.allData);

    // using useState for showing data
    const [WomensWear, setWomensWear] = useState([]);

    useEffect(() => {
        const womensWearData = allData.filter((item) => item.category === "women's clothing");
        setWomensWear(womensWearData);
    }, []);



    return (
        <>
            <div className="container category">
                <h1><span>55% Off</span> on Women's Wear...</h1>
                <div className="row d-flex">
                    {
                        WomensWear.length > 0 ? WomensWear.map((item, index) => (
                            <ProductCard item={item} key={index} />
                        )) : (<></>)
                    }
                </div>
            </div>
        </>
    )
}
