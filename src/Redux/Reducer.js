import { addToCartError, addToCartStart, addToCartSuccess, getAllDataError, getAllDataStart, getAllDataSuccess, movingToProductError, movingToProductStart, movingToProductSuccess } from "./Constants";

const INIt = {
    // initial state
    allData:[],
    loading:false,
    error:'',
    // here it is Product page data
    productData:{},
    // here I add all product which will be add to carted...
    cart:[]

}

const Reducer = (state = INIt, action) => {
    switch (action.type) {
        case getAllDataStart:
        case movingToProductStart:
        case addToCartStart:
            return {
                ...state,
                loading:true
            }
        

        case getAllDataSuccess:
            return {
                ...state,
                error:'',
                loading:false,
                allData:[...action.payload]
            }
        case movingToProductSuccess:
            return{
                ...state,
                error:'',
                loading:false,
                productData:action.payload
            }
        case addToCartSuccess:
        return {
                ...state,
                error:'',
                loading:false,
                cart:[...state.cart,action.payload]
            }


        case getAllDataError:
        case movingToProductError:
        case addToCartError:
            return {
                ...state,
                error:action.payload,
                loading:false
            }



        default:
            return state;
    }
}

export default Reducer;