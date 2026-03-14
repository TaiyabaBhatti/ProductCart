import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


 const Navbar = () => {
  return (
    <>
      <header >
        <nav className="flex flex-row justify-between mt-5">
          <div className="text-blue-800 text-3xl font-extrabold flex flex-row items-center gap-x-1.5">
            <p> Product Cart</p>
           <FaCartShopping/>
            
            </div>
          <div className="flex flex-row items-center gap-x-3">
            {/* add product icon*/}
           <NavLink to="/create" className="bg-gray-300 px-4 py-2 rounded-xs"> <FaCirclePlus className="text-2xl"/></NavLink>
            {/* toggle theme icon */}
            <button className="bg-gray-300 px-4 py-2 rounded-xs"><FaRegSun className="text-2xl"/></button>
            {/* profile icon */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
