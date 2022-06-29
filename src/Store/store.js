import { configureStore } from "@reduxjs/toolkit";
import vCardReducer from './Slices/vCardSlice';

const store = configureStore({
    reducer: { vCardQrcodes: vCardReducer },
});

export default store;