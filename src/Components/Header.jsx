import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getSearchResult } from "../features/ProductSlice";
import { getCartItems } from "../features/CartSlice";

const Header = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
    const handleSearch = () => {
        dispatch(getSearchResult(search));
    };
    useEffect(() => {
        dispatch(getCartItems());
    }, []);

    return (
        <div className="backdrop-blur-xl z-10 fixed w-[100vw] bg-[rgba(255,255,255,.4)] h-[60px]">
            <div className="navbar ">
                <div className="flex-1">
                    <Link
                        to={"/"}
                        className="btn btn-ghost normal-case text-xl text-black">
                        Inpui
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div
                        tabIndex={0}
                        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div
                            className="relative ml-8 bottom-4 cursor-pointer"
                            onClick={() => navigate("/cart")}>
                            <div className="absolute">
                                <AiOutlineShoppingCart className="text-2xl text-black absolute z-20" />
                            </div>
                            <p className="bg-black h-5 flex justify-center items-center w-5 rounded-full absolute -bottom-2 ">
                                {cart.length}
                            </p>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div
                                className="absolute right-4 top-4"
                                onClick={() => handleSearch()}>
                                <FcSearch className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
