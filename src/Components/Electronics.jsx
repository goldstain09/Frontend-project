import React, { useEffect, useState } from 'react';
import '../CSS/Category.scss';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './HomePageElements/ProductCard';
import { getAllDataStartAc_Fn } from '../Redux/Actions';

export default function Electronics() {

    const dispatch = useDispatch();

    // function called only once for getting all data from APi.
    useEffect(() => {
        dispatch(getAllDataStartAc_Fn());
    }, []);



    // getting data from store using  useSelector
    const allData = useSelector((state) => state.allData);

    // using useState for showing data
    const [electronics, setElectronics] = useState([]);

    useEffect(() => {
        const electronicsData = allData.filter((item) => item.category === "electronics");
        setElectronics(electronicsData);
    }, []);


    return (
        <>
            <div className="container category">
                <h1>Electronics</h1>
                <div className="row d-flex">
                    {
                        electronics.length > 0 ? electronics.map((item, index) => (
                            <ProductCard item={item} key={index} />
                        )) : (<></>)
                    }
                </div>
            </div>
        </>
    )
}
