import {
  addToCartError,
  addToCartStart,
  addToCartSuccess,
  decreasingQuantityError,
  decreasingQuantityStart,
  decreasingQuantitySuccess,
  getAllDataError,
  getAllDataStart,
  getAllDataSuccess,
  increasingQuantityError,
  increasingQuantityStart,
  increasingQuantitySuccess,
  movingToProductError,
  movingToProductStart,
  movingToProductSuccess,
  removeProductError,
  removeProductStart,
  removeProductSuccess,
  searchError,
  searchStart,
  searchSuccess,
} from "./Constants";

// For Getting all data
export const getAllDataStartAc_Fn = () => ({
  type: getAllDataStart,
});

export const getAllDataSuccessAc_Fn = (data) => ({
  type: getAllDataSuccess,
  payload: data,
});

export const getAllDataErrorAc_Fn = (error) => ({
  type: getAllDataError,
  payload: error,
});

// For moving to product or product page
export const movingToProductStartAc_Fn = (data) => ({
  type: movingToProductStart,
  payload: data,
});

export const movingToProductSuccessAc_Fn = (data) => ({
  type: movingToProductSuccess,
  payload: data,
});

export const movingToProductErrorAc_Fn = (error) => ({
  type: movingToProductError,
  payload: error,
});

// For adding a product to the cart
export const addToCartStartAc_Fn = (data) => ({
  type: addToCartStart,
  payload: data,
});

export const addToCartSuccessAc_Fn = (data) => ({
  type: addToCartSuccess,
  payload: data,
});

export const addToCartErrorAc_Fn = (error) => ({
  type: addToCartError,
  payload: error,
});

// For removing a product from the cart
export const removeProductStartAc_Fn = (data) => ({
  type: removeProductStart,
  payload: data,
});

export const removeProductSuccessAc_Fn = (data) => ({
  type: removeProductSuccess,
  payload: data,
});

export const removeProductErrorAc_Fn = (error) => ({
  type: removeProductError,
  payload: error,
});

// For removing a product from the cart
export const searchStartAc_Fn = (data) => ({
  type: searchStart,
  payload: data,
});

export const searchSuccessAc_Fn = (data) => ({
  type: searchSuccess,
  payload: data,
});

export const searchErrorAc_Fn = (error) => ({
  type: searchError,
  payload: error,
});
