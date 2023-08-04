import { delay, put, takeLatest } from 'redux-saga/effects';
import { addToCartStart, getAllDataStart, movingToProductStart, removeProductStart, searchStart } from './Constants';
import { gettingData } from './Service';
import { addToCartErrorAc_Fn, addToCartSuccessAc_Fn, getAllDataErrorAc_Fn, getAllDataSuccessAc_Fn, movingToProductErrorAc_Fn, movingToProductSuccessAc_Fn, removeProductErrorAc_Fn, removeProductSuccessAc_Fn, searchErrorAc_Fn, searchSuccessAc_Fn } from './Actions';


// function for getting data
function* sagaGettingProductData() {
    try {
        let data = yield gettingData();
        // yield console.log(data);
        yield delay(2000);
        yield put(getAllDataSuccessAc_Fn(data));
        // yield console.log('done');
    } catch (error) {
        yield delay(2000);
        yield put(getAllDataErrorAc_Fn(error.message));
    }
    
}


// sagaMovingToPRoduct
function* sagaMovingToPRoduct({ payload }) {
    try {
        yield put(movingToProductSuccessAc_Fn(payload));
    } catch (error) {
        yield put(movingToProductErrorAc_Fn(error.message));
    }
}



// add to cart
function* sagaAddToCart({ payload }) {
    try {
        yield put(addToCartSuccessAc_Fn(payload));
    } catch (error) {
        yield put(addToCartErrorAc_Fn(error.message));
    }
}



//remove product
function* sagaRemoveProduct({ payload }) {
    try {
        yield delay(2000);
        yield put(removeProductSuccessAc_Fn(payload));
    } catch (error) {
        yield delay(2000);
        yield put(removeProductErrorAc_Fn(error.message));
    }
}



// search
function* sagaSearch({ payload }) {
    try {
        yield delay(2000);
        yield put(searchSuccessAc_Fn(payload));
    } catch (error) {
        yield delay(2000);
        yield put(searchErrorAc_Fn(error.message));
    }
}

function* Saga() {
    yield takeLatest(getAllDataStart, sagaGettingProductData);
    yield takeLatest(movingToProductStart, sagaMovingToPRoduct);
    yield takeLatest(addToCartStart, sagaAddToCart);
    yield takeLatest(removeProductStart, sagaRemoveProduct);
    yield takeLatest(searchStart, sagaSearch);
}

export default Saga;