import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../utils/queries";
import ProductCard from "../components/Product/ProductCard";

function Shop() {

    const [products, setProducts] = useState([]);

    useQuery(GET_PRODUCTS, {
        onCompleted: (data) => {
            console.log(data.getProducts);
            setProducts(data.getProducts);
        },
    });

    return (
        <div className="flex justify-around flex-wrap p-4 lg:p-10 gap-2 lg:gap-8 lg:mx-44">
            {products.map((product) => {
                return (
                    <ProductCard product={product} key={product._id}/>
                )
            })}
        </div>
    )
};

export default Shop;