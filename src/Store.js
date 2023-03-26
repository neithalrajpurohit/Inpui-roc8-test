import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/CartSlice";
import ProuctReducer from "./features/ProductSlice";

export const Store = configureStore({
    reducer: {
        cart: CartReducer,
        product: ProuctReducer,
    },
});
