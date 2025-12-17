import { Link } from "react-router";

const ProductCard = (props) => {
    const {name, price, image,id } = props;
    return (
        <Link to={`/products/${id}`}>
        <div className="p-4">
            <div className="w-[300px] bg-slate-300 border-gray-400 border rounded-xl">
                <img src={image} alt={name} className="w-full h-[220px] rounded-xl" />
                <div className="p-5 text-center">
                    <h1 className="font-bold text-2xl ">{name}</h1>
                    <h3 className="font-semibold text-3xl">${price}</h3>
                    <button className="bg-orange-400 rounded-[15px] shadow-xl transform transition-transform duration-300
            hover:scale-110 mb-2 p-3 pl-4 pr-4 mt-3 cursor-pointer">Add to Cart +</button>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ProductCard;