import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
};

export const ProductSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
});
export const { addToCart, decrementQty, getCartItems } = ProductSlice.actions;
export default ProductSlice.reducer;
