import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";
import createSagaMiddleware from 'redux-saga';
import Saga from "./Saga";

const sagaMid = createSagaMiddleware();


const Store = configureStore({
    reducer:Reducer,
    middleware:[sagaMid],
    devTools:true
});

sagaMid.run(Saga);

export default Store;