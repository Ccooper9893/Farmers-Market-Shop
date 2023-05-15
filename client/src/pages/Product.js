import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../utils/queries";
import { GET_CATEGORY } from "../utils/queries";
import { Link } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";

function Product() {
    const { id } = useParams();

    const { data: productData } = useQuery(GET_PRODUCT, {
        variables: { getProductId: id }
    });

    const { data: categoryData } = useQuery(GET_CATEGORY, {
        variables: { category: productData?.getProduct?.category }
    });

    console.log(productData);
    console.log(categoryData);

    const { getProduct } = productData || {};
    const { getCategory } = categoryData || {};

    let filteredCategory = getCategory;

    if (getCategory) {
        filteredCategory = getCategory.filter((product) => product._id !== getProduct._id);
    }

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
                            <button className="bg-green-900 text-white hover:bg-green-800 p-2 text-md mt-4">Add to cart</button>
                            <h3>{getProduct.stock} in stock</h3>
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