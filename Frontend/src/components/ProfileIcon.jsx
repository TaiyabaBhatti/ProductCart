import React from 'react';
import { IoPeopleCircle } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const ProfileIcon = () => {
    return (
       <>
        <NavLink to="/login" className="bg-gray-300 px-4 py-2 rounded-xs">
         {/* <IoPeopleCircle className="text-2xl"/> */}
         L
         </NavLink>
         <NavLink to="/register" className="bg-gray-300 px-4 py-2 rounded-xs"> 
         {/* <IoPeopleCircle className="text-2xl"/> */}
         R
         </NavLink>
   </>
    );
}

export default ProfileIcon;
