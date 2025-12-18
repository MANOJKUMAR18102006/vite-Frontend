import { useState } from "react";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import axios from "axios";

const ProductList = () => {
    const [products,setproducts]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await axios.get("https://vite-backend-1.onrender.com/products");
            console.log(res.data);
            setproducts(res.data);
        }
        fetchData()
    },[])
    return(
        
        <div className="mx-auto mt-10 flex justify-center items-start flex-wrap">
        {products.map((product) => {
            return(
                <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} />
            )
        })}
        </div>
    )
}

export default ProductList;