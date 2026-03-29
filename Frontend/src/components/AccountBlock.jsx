import React, { useContext, useEffect, useState } from "react";
import { IoPeopleCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Account from "./Account";
import ProfileIcon from "./ProfileIcon";
import LoadingEffect from "./LoadingEffect";


const AccountBlock = () => {
  const { loginStatus } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
 
  return <>{loginStatus ? <ProfileIcon /> : <Account />}</>;
};

export default AccountBlock;
