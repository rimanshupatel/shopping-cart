// import React from 'react'
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";

export default function Navbar() {
  const nav_links = {
    padding: "0 1rem",
    fontWeight: 500,
  };

  return (
    <nav className="font-1 bg-white text-black h-[70px] w-full py-1 px-16 sticky z-[99] flex justify-between sm:items-center drop-shadow-md ">
      <div className="logo md:w-auto w-full flex justify-between sm:p-0 px-8 py-2 z-[99]">
        <Link to="/" className="text-3xl font-bold">
          Fips
        </Link>
      </div>
      <ul className="nav_links md:flex hidden capitalize">
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
        <li>
          <Link to="/Cart">cart</Link>
        </li>
      </ul>
    </nav>
  );
}
