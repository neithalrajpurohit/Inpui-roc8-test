import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, decrementQty, getCartItems } from "../features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
    let dispatch = useDispatch();
    let id = useParams();
    let cart = useSelector((state) => state.cart.cart);
    let navigate = useNavigate();
    const [productDetails, setProductDetails] = useState({});
    const fetchProductDetails = async () => {
        try {
            let response = await axios.get(
                `https://fakestoreapi.com/products/${id.id}`
            );
            setProductDetails(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, []);

    useEffect(() => {
        dispatch(getCartItems());
    }, []);

    return (
        <div className="bg-[#778da9] h-screen">
            <div className="flex justify-between items-center">
                <div className=" mt-11 w-[400px] h-[300px]">
                    <img src={productDetails?.image} />
                </div>
                <div className="max-w-[800px] mt-44">
                    <h1 className="text-4xl">{productDetails.category}</h1>
                    <h1 className="text-3xl">{productDetails?.title}</h1>
                    <p className="text-xl mt-4">
                        {productDetails?.description}
                    </p>
                    <div>
                        <h1 className="text-xl font-serif mt-10">
                            Price : &#8377;{productDetails?.price}
                        </h1>
                    </div>
                    <div className="rating rating-md">
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                        />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                        />
                    </div>
                    <h1>Rated by :{productDetails?.rating?.count} Customers</h1>
                    <button
                        className="btn btn-primary mt-7 "
                        onClick={() => {
                            dispatch(addToCart(productDetails));
                            // navigate("/cart");
                        }}>
                        Add To Cart
                    </button>{" "}
                    <button
                        className="btn btn-outline"
                        onClick={() => dispatch(addToCart(productDetails))}>
                        +
                    </button>{" "}
                    {cart.length >= 1 &&
                        cart?.find((item) => item.id === productDetails.id)
                            ?.qty}{" "}
                    <button
                        className="btn btn-outline"
                        onClick={() => {
                            dispatch(decrementQty(productDetails.id));
                        }}>
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
