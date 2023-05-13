import React from "react";
import { Link } from "react-router-dom";
import eggs from "../../images/eggs.webp";

function ProductCard() {
    return (
        <Link to="/product/:id">
        <div className="card card-compact w-44 lg:w-56 rounded-none">
            <figure className="border border-black"><img src={eggs} alt="Eggs" /></figure>
            <div className="text-black text-center p-2">
                <h2 className="text-lg">Farm Fresh Eggs</h2>
                <p>$5.00</p>
                {/* <button className="bg-green-900 text-white hover:bg-green-800 p-2 text-md mt-2">Add to Cart</button> */}
            </div>
        </div>
        </Link>
    )
};

export default ProductCard;