import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProductForm = (props) => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")

    const navigate=useNavigate();


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    

    const handleAdd = async(e) => {
        e.preventDefault()
        const response=await axios.post("http://localhost:3000/products",{
            name:name,
            image:image,
            price:price
        })
        navigate('/products');
    }


    return (
        <>
            <div className="mt-10 w-[500px] flex flex-col  mx-auto p-2 bg-violet-200 shadow-lg rounded-xl ">
                <div className="flex flex-col ml-15">
                <h1 className="font-bold text-2xl mb-5 pt-5 text-center">Add Product</h1>
                <label className="font-bold ">Name:</label>
                <input type="text" placeholder="Product name" className="border p-2 rounded-[5px] w-[85%]" 
                value={name} onChange={handleName}/>
                <label className="font-bold mt-5">Image-Url:</label>
                <input type="text" placeholder="Product image url" className="border p-2 rounded-[5px] w-[85%] " 
                value={image} onChange={handleImage}/>
                <label className="font-bold mt-5">Price:</label>
                <input type="number" placeholder="price" className="border p-2 rounded-[5px] w-[85%]"
                value={price} onChange={handlePrice} />
                {/* <label className="font-bold mt-5">Selling Price:</label>
                <input type="number" placeholder="selling price" className="border p-2 rounded-[5px] w-[85%]"
                value={sellingprice} onChange={handleSellingprice} />
                <label className="font-bold mt-5">Original Price:</label>
                <input type="number" placeholder="Original price" className="border p-2 rounded-[5px] w-[85%]" 
                value={originalprice} onChange={handleOriginalprice}/>
                <label className="font-bold mt-5">Category:</label>
                <input type="text" placeholder="product category" className="border p-2 rounded-[5px] w-[85%]" 
                value={category} onChange={handleCategory}/> */}
                <button className="bg-orange-600 text-white text-lg p-2 py-2 rounded-lg mt-5 ml-20 w-[50%] mb-5" onClick={handleAdd}>Add</button>
                </div>
                </div>
        </>
    )
}

export default ProductForm;