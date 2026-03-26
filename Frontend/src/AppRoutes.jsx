import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import CreateProduct from './pages/CreateProduct.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';


const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/create" element={<CreateProduct/>}/>
            <Route path="/edit/:productId" element={<CreateProduct/>}/>
             <Route path="/login" element={<Login/>}/>
                 <Route path="/register" element={<Register/>}/>
        </Routes>
        
        </>
    );
}

export default AppRoutes;
