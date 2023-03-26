import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../features/ProductSlice";

const ProducList = () => {
    const product = useSelector((state) => state.product.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    return (
        <div className="bg-[#a2d2ff] ">
            <div className="max-w-[1200px] mx-auto bg-[#457b9d]  ">
                <div className="flex justify-center flex-wrap gap-4 pt-[80px] ">
                    {product.length >= 1 &&
                        product.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className=" "
                                    onClick={() => {
                                        navigate(
                                            `/productdetails/${product.id}`
                                        );
                                    }}
                                >
                                    <div className=" card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img
                                                src={product.image}
                                                alt="Shoes"
                                                className="rounded-xl  h-[200px]"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">
                                                {product.title}
                                            </h2>
                                            <p>
                                                {product.description.slice(
                                                    0,
                                                    45
                                                )}
                                                ...
                                            </p>
                                            <p className="text-xl">
                                                Price : &#8377;{product.price}
                                            </p>
                                            <div className="card-actions">
                                                <button className="btn btn-outline">
                                                    Add To Cart
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
    );
};

export default ProducList;
