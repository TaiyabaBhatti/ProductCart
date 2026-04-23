import React from "react";
import { NavLink } from "react-router-dom";
import {ROUTES } from "../utils/routesNaming";

const ProductPanelActions = ({setShowForm}) => {
  return (
    <div className="mx-auto mt-10 flex items-center gap-5 w-fit">
      <button
        onClick={() => setShowForm(true)}
        className="cursor-pointer rounded-md mx-auto block  bg-green-900 p-5 text-white font-bold"
      >
        Add more product?
      </button>

       <NavLink
        to={ROUTES.HOME}
        className="cursor-pointer rounded-md mx-auto block w-fit bg-blue-700 p-5 text-white font-bold"
      >
         Back to home page?
      </NavLink>
    </div>
  );
};

export default ProductPanelActions;
