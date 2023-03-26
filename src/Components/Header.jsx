import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
const Header = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    return (
        <div className="backdrop-blur-xl z-10 fixed w-[100vw] bg-[rgba(255,255,255,.4)] h-[60px]">
            <div className="navbar ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Inpui</a>
                </div>
                <div className="flex-none gap-2">
                    <Link to="/cart">Cart</Link>
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
                                onClick={() =>
                                    navigate("/search", {
                                        state: { query: search },
                                    })
                                }>
                                <FcSearch className="" />
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
