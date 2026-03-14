import React from 'react';

import ProductCatlogue from './ProductCatlogue';
import { FaRocket } from 'react-icons/fa6';

const Homepage = () => {
    return (
       <section className='mt-28'>
       {/* display products cards */}
        <div className="flex flex-row items-center gap-x-1.5 justify-center">
               <h1 className="text-blue-800 text-2xl font-extrabold">
                 Current Products
               </h1>
               <FaRocket className="text-blue-800 text-2xl" />
             </div>
       <ProductCatlogue/>
       </section>
    );
}

export default Homepage;
