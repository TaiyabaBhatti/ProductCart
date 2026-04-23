import React, { useContext } from 'react';
import ProductCatlogue from '../components/ProductCatlogue';
import { FaRocket } from 'react-icons/fa6';
import Wrapper from '../components/Wrapper';


const Homepage = () => {
  
    return (
      <Wrapper>
       {/* display products cards */}
        <div className="flex flex-row items-center gap-x-1.5 justify-center">
               <h1 className="text-blue-800 text-2xl font-extrabold">
               Current Products
               </h1>
               <FaRocket className="text-blue-800 text-2xl" />
             </div>
       <ProductCatlogue/>
    </Wrapper>
    );
}

export default Homepage;
