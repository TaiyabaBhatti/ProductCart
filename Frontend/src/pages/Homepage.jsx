import React, { useContext } from 'react';
import ProductCatlogue from '../components/ProductCatlogue';
import { FaRocket } from 'react-icons/fa6';
import Wrapper from '../components/Wrapper';
import { AuthContext } from '../context/AuthContext';

const Homepage = () => {
  const {loginStatus} = useContext(AuthContext)
    return (
      <Wrapper>
       {/* display products cards */}
        <div className="flex flex-row items-center gap-x-1.5 justify-center">
               <h1 className="text-blue-800 text-2xl font-extrabold">
                {loginStatus?"Current Products":"User Not Logged In"} 
               </h1>
               <FaRocket className="text-blue-800 text-2xl" />
             </div>
       <ProductCatlogue/>
    </Wrapper>
    );
}

export default Homepage;
