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

// function to get cart data from local storage...
const cartData = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (cart) {
    return cart;
  } else {
    return [];
  }
};

// initial state
const INIt = {
  allData: [],
  loading: false,
  error: "",
  // here it is Product page data
  productData: {},
  // here I add all product which will be add to carted...
  cart: cartData(),
  //it's for search value
  searchValue: "",
};

const Reducer = (state = INIt, action) => {
  switch (action.type) {
    case getAllDataStart:
    case movingToProductStart:
    case addToCartStart:
    case removeProductStart:
    case searchStart:
      return {
        ...state,
        loading: true,
      };

    case getAllDataSuccess:
      return {
        ...state,
        error: "",
        loading: false,
        allData: [...action.payload],
      };
    case movingToProductSuccess:
      return {
        ...state,
        error: "",
        loading: false,
        productData: action.payload,
      };
    case addToCartSuccess:
      let data = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(data));
      return {
        ...state,
        error: "",
        loading: false,
        cart: data,
      };

    case removeProductSuccess:
      let dataa = state.cart.filter(
        (item, index) => item + index !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(dataa));
      return {
        ...state,
        error: "",
        loading: false,
        cart: dataa,
      };

    case searchSuccess:
      return {
        ...state,
        error: "",
        loading: false,
        searchValue: action.payload,
      };

    case getAllDataError:
    case movingToProductError:
    case addToCartError:
    case removeProductError:
    case searchError:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default Reducer;
