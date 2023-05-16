import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    
    return (
        <Link to={`/product/${product._id}`}>
            <div className="card card-compact rounded-none hover:opacity-90">
                <figure><img className=" w-36 h-36 lg:w-56 lg:h-56 object-cover border border-black" src={product.image} alt={product.name} /></figure>
                <div className="text-black text-center p-2 w-36 lg:w-56 ">
                    <h2 className="text-md font-serif font-bold">{product.name}</h2>
                    <h3 className="text-sm  font-serif">{product.merchant.business_name}</h3>
                    <h4 className="text-lg text-green-900 font-bold font-serif">${product.price}</h4>
                    {/* <button className="bg-green-900 text-white hover:bg-green-800 p-2 text-md mt-2">Add to Cart</button> */}
                </div>
            </div>
        </Link>
    )
};

export default ProductCard;