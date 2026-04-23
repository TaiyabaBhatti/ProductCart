import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import ProfileIcon from "./AccountBlock";
import AccountBlock from "./AccountBlock";
import { ROUTES } from "../utils/routesNaming";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { loginStatus } = useContext(AuthContext);

  return (
    <>
      <header>
        <nav className="flex flex-row justify-between mt-5">
          <div className="text-blue-800 text-3xl font-extrabold flex flex-row items-center gap-x-1.5">
            <p> Product Cart</p>
            <FaCartShopping />
          </div>
          <div className="flex flex-row items-center gap-x-3">
            {/* add product icon*/}

            <NavLink
              to={ROUTES.CREATE_PRODUCT}
              onClick={(e)=>{
                if(!loginStatus){
                  e.preventDefault()
                }
              }}
              className={`bg-gray-300 px-4 py-2 disabled rounded-xs ${loginStatus}?"cursor-default":"cursor-not-allowed"`}
            >
              {" "}
              <FaCirclePlus className="text-2xl" />
            </NavLink>

            {/* toggle theme icon */}
            <button className="bg-gray-300 px-4 py-2 rounded-xs">
              <FaRegSun className="text-2xl" />
            </button>
            {/* profile icon */}
            <AccountBlock />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
