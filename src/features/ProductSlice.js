import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
    "product/list",
    async (data, { rejectWithValue }) => {
        try {
            let fetchProduct = await axios.get(
                "https://fakestoreapi.com/products"
            );
            return fetchProduct.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(err.message);
        }
    }
);

const initialState = {
    product: [],
    isLoading: false,
    error: null,
};

export const ProductSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getSearchResult: (state, action) => {
            const query = action.payload;
            const searchProd = state.product.filter((prod) =>
                prod.title.includes(query)
            );
            state.product = searchProd;
        },
    },

    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.isLoading = false;
            state.error = null;
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        },
        [fetchProduct.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});
export const { getSearchResult } = ProductSlice.actions;
export default ProductSlice.reducer;
