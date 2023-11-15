import React, { useEffect, useState } from "react";
import "../CSS/Category.scss";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./HomePageElements/ProductCard";
import { getAllDataStartAc_Fn } from "../Redux/Actions";

export default function Jewellery() {
  const dispatch = useDispatch();

  // function called only once for getting all data from APi.
  useEffect(() => {
    dispatch(getAllDataStartAc_Fn());
  }, []);

  // getting data from store using  useSelector
  const allData = useSelector((state) => state.allData);

  // using useState for showing data
  const [jewellery, setJewellery] = useState([]);

  useEffect(() => {
    const jewelleryData = allData.filter(
      (item) => item.category === "jewelery"
    );
    setJewellery(jewelleryData);
  }, []);

  return (
    <>
      <div className="container category">
        <h1>
          <span>35% Off</span> on Jewelleries...
        </h1>
        <div className="row d-flex">
          {jewellery.length > 0 ? (
            jewellery.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
