import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, decrementQty, getCartItems } from "../features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let id = useParams();
    let cartItems = useSelector((state) => state.cart.cart);

    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        dispatch(getCartItems());
    }, []);
    return (
        <div
            style={{
                background: `linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)`,
            }}
            className="bg-[#639fab] min-h-[100vh]">
            {cartItems?.length >= 1 ? (
                <div
                    className="bg-[#e6e6e6] rounded-2xl text-black  w-full h-full  dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto "
                    id="chec-div">
                    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
                    <div
                        className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
                        id="checkout">
                        <div
                            className="flex items-end lg:flex-row flex-col justify-center"
                            id="cart">
                            <div
                                style={{
                                    background: `linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)`,
                                }}
                                className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4  bg-[#bbcde5] rounded-2xl dark:bg-gray-800  overflow-x-hidden lg:h-screen h-auto"
                                id="scroll">
                                <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-chevron-left"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                    <p
                                        className="text-sm pl-2 leading-none text-black"
                                        onClick={() => navigate(-1)}>
                                        Back
                                    </p>
                                </div>
                                <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800">
                                    Your Items
                                </p>
                                <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"></div>
                                {cartItems?.map((cartProducts) => {
                                    return (
                                        <div
                                            key={cartProducts.id}
                                            className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                                <img
                                                    src={cartProducts.image}
                                                    alt="Gray Sneakers"
                                                    className="h-full object-center object-cover md:block hidden"
                                                />
                                            </div>
                                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                                <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4"></p>

                                                <div className="flex items-center justify-between w-full pt-1">
                                                    <div>
                                                        <p className="text-base flex-1 font-black leading-none text-gray-800 ">
                                                            {cartProducts.title}
                                                        </p>
                                                        <div className="mt-4 text-black font-semibold">
                                                            Price : &#8377;
                                                            {cartProducts.price *
                                                                cartProducts.qty}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-[.4] items-center justify-end gap-5  w-[300px] ">
                                                        <button
                                                            onClick={() => {
                                                                dispatch(
                                                                    addToCart(
                                                                        cartProducts
                                                                    )
                                                                );
                                                            }}
                                                            className="active:scale-95 transition-transform duration-150 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                                +
                                                            </span>
                                                        </button>
                                                        <p className="text-black">
                                                            {cartProducts?.qty}
                                                        </p>

                                                        <button
                                                            onClick={() => {
                                                                dispatch(
                                                                    decrementQty(
                                                                        cartProducts.id
                                                                    )
                                                                );
                                                            }}
                                                            className="active:scale-95 transition-transform duration-150 relative  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                                -
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="font-serif flex items-center justify-center h-[80vh] text-3xl text-center">
                    Your Cart is Empty
                </div>
            )}
        </div>
    );
};

export default Cart;
