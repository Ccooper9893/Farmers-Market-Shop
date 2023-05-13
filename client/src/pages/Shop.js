import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../utils/queries";
import ProductCard from "../components/Product/ProductCard";

function Shop() {

    const [categoryData, setCategoryData] = useState(null);
    const [productFilter, setProductFilter] = useState(null);

    useQuery(GET_PRODUCTS, {
        onCompleted: (data) => {
            setCategoryData(data.getProducts);
            setProductFilter(data.getProducts);
        },
    });

    return (
        <div className="flex justify-center flex-wrap p-10 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
};

export default Shop;