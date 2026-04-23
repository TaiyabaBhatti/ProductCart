import React, { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';


const ProtectedRoutes = () => {

    const {
        currUser,
        loginStatus} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
if(!loginStatus){
return <Navigate to="/login" replace/>
}
else {
    return <Outlet/>
}



    },[loginStatus])
    return (
        <Outlet/>
    );
}

export default ProtectedRoutes;
