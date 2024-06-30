// import React from 'react'
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
export default function Navbar() {
  const nav_links = {
    padding: "0 1rem",
    fontWeight: 500,
  };
  const cartItems = useSelector((state) => state.ShoppingCart.cart);

  const TotalQuantity = cartItems.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);
  return (
    <nav className="font-1 bg-white text-black h-[70px] w-full py-1 px-16 sticky z-[99] flex justify-between sm:items-center drop-shadow-md ">
      <div className="logo md:w-auto w-full flex justify-between sm:p-0 px-8 py-2 z-[99]">
        <Link to="/" className="text-3xl font-bold">
          Fips
        </Link>
      </div>
      <ul className="text-lg nav_links md:flex hidden capitalize">
        <Link to="/home" className="leading-[70px]">
          <li
            style={nav_links}
            className="hover:border-b-4 hover:border-purple-500 duration-300"
          >
            home
          </li>
        </Link>
        <li>
          <Navlinks />
        </li>
      </ul>
      <Link
        to="/Cart"
        className="relative leading-[20px] text-2xl hover:border-b-4 hover:border-purple-500 duration-300"
      >
        <span style={nav_links}>
          <LuShoppingCart />
        </span>
        {TotalQuantity > 0 && (
          <span className="absolute top-[16px] text-center text-xs h-4 w-4 rounded-full bg-red-500 text-white">
            {TotalQuantity}
          </span>
        )}
      </Link>
    </nav>
  );
}
