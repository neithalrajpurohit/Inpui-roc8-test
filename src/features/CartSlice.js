import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
    cart: [],
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            let prevCartItems = localStorage.getItem("cart");
            if (!prevCartItems) {
                const prod = [{ ...product, qty: 1 }];
                localStorage.setItem("cart", JSON.stringify(prod));
                state.cart = prod;
            } else {
                prevCartItems = JSON.parse(prevCartItems);

                let findProduct = prevCartItems.findIndex((item) => {
                    if (item.id === product.id) {
                        return true;
                    } else {
                        return false;
                    }
                });
                if (!prevCartItems[findProduct]?.qty) {
                    // add qty property because this is not in the cart
                    prevCartItems.push({ ...product, qty: 1 });
                    localStorage.setItem("cart", JSON.stringify(prevCartItems));
                    state.cart = prevCartItems;
                } else {
                    prevCartItems[findProduct].qty += 1;
                    state.cart = prevCartItems;
                    localStorage.setItem("cart", JSON.stringify(prevCartItems));
                }
            }
        },
        decrementQty: (state, action) => {
            let id = action.payload;
            let cartItems = localStorage.getItem("cart");
            if (cartItems) {
                cartItems = JSON.parse(cartItems);
                let find = cartItems.findIndex((item) => {
                    if (item.id === id) {
                        return true;
                    } else {
                        return false;
                    }
                });

                if (cartItems[find]?.qty >= 2) {
                    console.log(cartItems[find].qty);
                    cartItems[find].qty -= 1;
                    localStorage.setItem("cart", JSON.stringify(cartItems));
                    state.cart = cartItems;
                } else {
                    if (cartItems[find]) {
                        cartItems.splice(find, 1);
                        localStorage.setItem("cart", JSON.stringify(cartItems));
                        state.cart = cartItems;
                    }
                }
            }
        },
        getCartItems: (state, action) => {
            let cartItems = localStorage.getItem("cart");
            if (cartItems) {
                cartItems = JSON.parse(cartItems);
                state.cart = cartItems;
            }
        },
    },
});
export const { addToCart, decrementQty, getCartItems } = CartSlice.actions;
export default CartSlice.reducer;
