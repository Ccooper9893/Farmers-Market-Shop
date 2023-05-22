import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../utils/queries";
import { GET_CATEGORY } from "../utils/queries";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART } from "../utils/actions";
import ProductCard from "../components/Product/ProductCard";

function Product() {

    const { id } = useParams();
    const [state, dispatch] = useStoreContext();
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if(quantity < getProduct.stock) {
            setQuantity(quantity + 1);
        };
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        };
    };

    //Grabbing product details
    const { data: productData } = useQuery(GET_PRODUCT, {
        variables: { getProductId: id }
    });
    const { getProduct } = productData || {};

    //Grabbing products in same category
    const { data: categoryData } = useQuery(GET_CATEGORY, {
        variables: { category: productData?.getProduct?.category }
    });
    const { getCategory } = categoryData || {};

    //Removing same product from product category array
    let filteredCategory = getCategory;
    if (getProduct && getCategory) {
        filteredCategory = getCategory.filter((product) => product._id !== getProduct._id);
    }

    const addToCart = () => {
        dispatch({
            type: ADD_TO_CART,
            product: { getProduct, quantity }
        });
        console.log(state)
    };

    return (
        <>
            {productData && (
                <div className="mx-10 lg:mx-64 mt-8 secFont">
                    <div className="text-md breadcrumbs border-b border-black">
                        <ul className="mx-6">
                            <li><Link to="/shop">Shop</Link></li>
                            <li>{getProduct.category}</li>
                        </ul>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-8 my-4">
                        <div className="">
                            <img className="w-96 h-96 object-cover" src={getProduct.image} alt={getProduct.name}></img>
                        </div>
                        <div className=" w-56 my-auto">
                            <small>{getProduct.merchant.business_name}</small>
                            <h1 className="text-black text-2xl">{getProduct.name}</h1>
                            <p>{getProduct.product_description}</p>
                            <h2 className="text-2xl">${getProduct.price}</h2>
                            <h4 className="mt-2">{getProduct.stock} left in stock!</h4>
                            <div className="flex flex-row items-center mt-8">
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded-l" onClick={decrement}>
                                    &lt;
                                </button>
                                <h3 className="bg-white border border-black px-4 py-1 text-center">
                                    {quantity}
                                </h3>
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded-r" onClick={increment}>
                                    &gt;
                                </button>
                            </div>
                            {!getProduct.stock ? (
                                <button className="bg-green-900 text-white hover:bg-green-700 p-1 text-md mt-2 ">Out of Stock</button>
                            ) : (
                                <button className="bg-green-900 text-white hover:bg-green-700 p-1 text-md mt-2 " onClick={addToCart}>Add to cart</button>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <h4 className="text-center text-lg text-black mt-10 underline mb-4">Related Products</h4>
            {filteredCategory && (
                <div className="flex justify-center flex-wrap gap-8 mx-40 mb-20">
                    {filteredCategory.map((product) => {
                        return (
                            <ProductCard product={product} key={product._id} />
                        )
                    })}
                </div>
            )}
        </>
    )
};

export default Product;