import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext.js";
import { verifyToken } from "../api/authApi.js";
import { NotificationPopup } from "../components/NotificationPopup.js";
import { useNavigate } from "react-router-dom";

const AuthState = ({ children }) => {
  // data i want globally
  const [currUser, setCurrUser] = useState(null);
  const [username, setUsername] = useState(null);

   const [globalMessage, setGlobalMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loading, setLoading] = useState(false);

useEffect(()=>{
    
    const checkJwtToken = async () =>{
       
try {
  const res = await verifyToken(); 
  console.log(res.data.user) 
  setCurrUser(res.data.user)
  setLoginStatus(true)

} catch (error) {
// NotificationPopup(error,"error")

  setCurrUser(null)
  setLoginStatus(false)
 
}
    }

checkJwtToken()
},[])
  return (
    <AuthContext.Provider
      value={{
        currUser,
        globalMessage,
        setGlobalMessage,
        setCurrUser,
        setLoginStatus,
        loginStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
