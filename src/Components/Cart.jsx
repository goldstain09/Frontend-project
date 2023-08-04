import React, { useEffect, useState } from 'react';
import '../CSS/Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartStartAc_Fn, decreasingQuantityStartAc_Fn, increasingQuantityStartAc_Fn, removeProductStartAc_Fn } from '../Redux/Actions';
import { Link, useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

export default function Cart() {

    // navigate
    const navigate = useNavigate();

    // dispatch
    const dispatch =  useDispatch();


    // getting data from store
    const { loading, error, cart } = useSelector((state) => state);


    //for total
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        let totalValue = 0;
        cart.forEach((item)=>{
            totalValue += item.price;
        })
        setTotal(totalValue);
    },[cart]);


    // managing loading
    if(loading){
        return (<>
        <div style={{width:'98vw',height:'99vh',display:'flex', justifyContent:'center',alignItems:'center', overflow:'hidden'}}>
        <HashLoader style={{position:'fixed'}}  color='#97ddf4'  />
        </div>
        </>)
    }

    //managing error
    if(error){
        return (
        <>
        <div style={{ width: '98vw', height: '99vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <h1 className='h1' style={{color:'#97ddf4',fontFamily:"'Raleway', sans-serif"}}>Something went wrong... <i class="bi bi-emoji-frown"></i></h1>
        </div>
        </>
        )
    }



    return (
        <>
            <div className="container-fluid cartPage">
                <h1 className='h1'>Your Cart</h1>
                {
                    cart.length > 0 ? cart.map((item, index) => (
                        <div className="row" key={index}>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 image_div">
                                <img src={item.image} alt="---" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 title_Div">
                                <h1>{item.title}</h1>
                                <h3><i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"> {item.rating.rate}</i>
                                </h3>
                                <h2><span>${(item.price + 25).toFixed(2)}</span> ${item.price}</h2>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 Remove_div">
                                <div className="d-flex">
                                    <button
                                        onClick={()=>{
                                            dispatch(removeProductStartAc_Fn(item+index));
                                        }} 
                                        className='btn btn-outline-danger'>
                                        <i className="bi bi-trash3"></i></button>
                                </div>
                                
                            </div>
                        </div>

                    )) : (<>
                    <div className='text-center'>
                    <h1 className='h1 text-center mb-5 mt-5'style={{color:'#97ddf4',fontFamily:"'Raleway', sans-serif"}}>Cart is Empty <i class="bi bi-emoji-frown"></i></h1>
                    <Link to={'/Frontend-project'} className='w-100 text-center text-decoration-none' >ADD Items <i class="bi bi-cursor"></i></Link>
                    </div>
                    </>)
                }

                {
                    total > 0 && (<div className="row d-flex justify-content-center">
                    <div className='col-12 total'>
                        <h3 align='center' className='h3'>Delivery Charges:${+10}</h3>
                        <h3 align='center' className='h3'>Products Total:${(total).toFixed(2)}</h3>
                        <h1 align='center' className='h1'>Grand Total:${(total + 10).toFixed(2)}</h1>
                        <button onClick={()=>{
                            navigate('/Frontend-project');
                            alert(`Dummy---- Hurry!! Order Placed...`)
                        }} className='btn btn-outline-success'>Place Order</button>
                    </div>
                </div>)
                }
                
            </div>
        </>
    )
}





































































































































































































































































// for later [ I trid add or subtract the quantity of product but didnot got success in that, so for now i have to submit as it is but i will try it in better way in future]




    // it's for quantity
    // function countOccurrences(arr) {
        // const occurrenceMap = {};
        // arr.forEach(item => {
            // occurrenceMap[item.title] = (occurrenceMap[item.title] || 0) + 1;
        // });
        // return occurrenceMap;
    // }


    // // for updated cart 
    // const [updatedCart,setUpdatedCart] = useState([]);

    // useEffect(() => {
    //     let counts = countOccurrences(cart);
    //     // it gives an object with keys of title so, I converted it into an array for checking...
    //     const countsArray = Object.keys(counts).map((key) => ({
    //         name: key,
    //         count: counts[key],
    //     }));


    //     // it's for if any item's quantity greater then one then it remove and shows it only one but increased in quantity no.
    //     let New_Cart = [];
    //     cart.forEach((item) => {
    //         if (!New_Cart.includes(item.count)) {
    //             New_Cart.push(item);
    //         }
    //     })

    //     // Create a map for the first array to easily access counts by name
    //     const nameToCountMap = new Map();
    //     countsArray.forEach(item => {
    //         nameToCountMap.set(item.name, item.count);
    //     });


    //     // Update the second array with the counts from the first array
    //     const updatedCart = New_Cart.map(item => ({
    //         ...item,
    //         count: nameToCountMap.get(item.title) || 0
    //     }));

    //     setUpdatedCart(updatedCart);

    // },[])
