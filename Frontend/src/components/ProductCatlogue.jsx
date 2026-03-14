import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductCatlogue = () => {

   const [loading, setLoading] = useState(true);
   const [products,setProducts] = useState([]);
   const navigate = useNavigate();
  
   useEffect(()=>{
    
     const getAllProducts = async ()=>{
    setLoading(true)
    try {
const response = await axios.get('/api/products/get-products',{})
console.log(response.data.data)
setProducts(response.data.data)
      
    } catch (error) {
      console.log(error)
    }
    finally{
setLoading(false)
    }
   }
     getAllProducts();
   },[])

const deleteProduct = async (productId) => {
  try {
    const resposne = await axios.delete(`/api/products/delete-product/${productId}`)
setProducts(prev => prev.filter((product) => product._id !== productId))
    console.log("Deleted Successfuly")
    
  } catch (error) {
    
  }
  finally{
    
  }
}

const updateProduct = async (productId) =>{
 navigate(`/edit/${productId}`)
}


  return (


  <>
  {loading
  ?<div className="w-full mt-10">
    <p className="text-center font-bold animate-pulse">Getting Products ...</p>
  </div>
  :  <section className="mt-10 ">
      {/* display products header*/}
     
      <div className=" mt-10 flex flex-wrap gap-4 justify-center">
        {products.map((product,index)=>{

             return  <ProductCard onUpdate={updateProduct} onDelete={deleteProduct} data={product} key={product._id}/>

        })}
      </div>
    </section>}
  
  
  
  
  </>
  );
};

export default ProductCatlogue;
