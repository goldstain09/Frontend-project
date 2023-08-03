import React, { useEffect, useState } from 'react';
import '../CSS/Category.scss';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './HomePageElements/ProductCard';
import { getAllDataStartAc_Fn } from '../Redux/Actions';

export default function MensWear() {

    const dispatch = useDispatch();


    // function called only once for getting all data from APi.
    useEffect(() => {
        dispatch(getAllDataStartAc_Fn());
    }, []);




    // getting data from store using  useSelector
    const allData = useSelector((state) => state.allData);

    // using useState for showing data
    const [MensWear, setMensWear] = useState([]);

    useEffect(() => {
        const mensWearData = allData.filter((item) => item.category === "men's clothing");
        setMensWear(mensWearData);
    }, []);


    return (
        <>
            <div className="container category">
                <h1><span>68% Off</span> on Men's Wear...</h1>
                <div className="row d-flex gap-2 gap-md-3 gap-lg-4 gap-xl-5">
                    {
                        MensWear.length > 0 ? MensWear.map((item, index) => (
                            <ProductCard item={item} key={index} />
                        )) : (<></>)
                    }
                </div>
            </div>
        </>
    )
}
