import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSection from "./userSection";

let baraReducer = combineReducers({
    abc:userSection.reducer,
    // product:productSection.reducer,
});

export let meraStore =  configureStore({
    reducer:baraReducer
});