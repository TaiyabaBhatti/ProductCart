import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CreateProduct from './components/CreateProduct';


const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/create" element={<CreateProduct/>}/>
              <Route path="/edit/:productId" element={<CreateProduct/>}/>
        </Routes>
        
        </>
    );
}

export default AppRoutes;
