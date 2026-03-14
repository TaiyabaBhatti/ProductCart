import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import productImage from '../assets/images/linkedinbanner.png'

const ProductCard = ({data,onDelete,onUpdate}) => {
    return (
       <section className='max-w-2xs shadow-2xl border-[0.2px] border-transparent rounded-md'>
        <img src={productImage} alt="" className='h-28 object-cover border-t-[0.2px] rounded-t-md' />
        <div className='p-2'>
            <h3>{data.name}</h3>
            <h3>{data.price}$</h3>
             <div className="flex flex-row items-center gap-x-0.5 mt-1.5">
                        {/* add product icon*/}
                       <button onClick={()=> onUpdate(data._id)} className="bg-blue-200 px-2 py-1 rounded-xs cursor-pointer"> <FaFilePen className="text-lg"/></button>
                        {/* toggle theme icon */}
                        <button  onClick={()=>onDelete(data._id)} className="bg-red-200 px-2 py-1 rounded-xs cursor-pointer"><FaDeleteLeft className="text-lg"/></button>
                        {/* profile icon */}
             </div>
        </div>
       </section>
    );
}

export default ProductCard;
