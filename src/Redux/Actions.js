import { addToCartError, addToCartStart, addToCartSuccess, getAllDataError, getAllDataStart, getAllDataSuccess, movingToProductError, movingToProductStart, movingToProductSuccess } from "./Constants";


// For Getting all data
export const getAllDataStartAc_Fn = () => ({
    type:getAllDataStart
});

export const getAllDataSuccessAc_Fn = (data) => ({
    type:getAllDataSuccess,
    payload:data
});

export const getAllDataErrorAc_Fn = (error) => ({
    type:getAllDataError,
    payload:error
});



// For moving to product or product page
export const movingToProductStartAc_Fn = (data) => ({
    type:movingToProductStart,
    payload:data
});

export const movingToProductSuccessAc_Fn = (data) => ({
    type:movingToProductSuccess,
    payload:data
});

export const movingToProductErrorAc_Fn = (error) => ({
    type:movingToProductError,
    payload:error
});




// For adding a product to a cart 
export const addToCartStartAc_Fn = (data) => ({
    type:addToCartStart,
    payload:data
});

export const addToCartSuccessAc_Fn = (data) => ({
    type:addToCartSuccess,
    payload:data
});

export const addToCartErrorAc_Fn = (error) => ({
    type:addToCartError,
    payload:error
});

