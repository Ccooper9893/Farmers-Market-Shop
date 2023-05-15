import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../utils/queries";
import ProductCard from "../components/Product/ProductCard";

function Shop() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useQuery(GET_PRODUCTS, {
        onCompleted: (data) => {
            setFilteredProducts(data.getProducts);
            setProducts(data.getProducts);
        },
    });

    const filterByCategory = (event) => {
        const selection = event.target.id;
        if (selection === "All") {
            setFilteredProducts(products);
        } else {
            const updatedProducts = products.filter(
                (product) => product.category === selection
            );
            setFilteredProducts(updatedProducts);
        }
    };

    const sortProducts = (event) => {
        const selection = event.target.id;
        switch (selection) {
            case "AZ": {
                const tempFilter = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
                setFilteredProducts(tempFilter);
            }
                break;
                case "ZA": {
                    const tempFilter = [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
                    setFilteredProducts(tempFilter);
                }
                break;
                case "HL": {
                    const tempFilter = [...filteredProducts].sort((a, b) => b.price - a.price);
                    setFilteredProducts(tempFilter);
                }
                break;
                case "LH": {
                    const tempFilter = [...filteredProducts].sort((a, b) => a.price - b.price);
                    setFilteredProducts(tempFilter);
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="mx-4 lg:mx-96 mt-8">
            <p className="text-black text-center text-lg lg:text-xl border-b border-black pb-4">Our farm-fresh produce is grown without the use of harmful pesticides or chemicals, so you can enjoy the freshest and healthiest fruits and vegetables possible. Plus, by supporting our local farmers, you're helping to create a more sustainable food system and a stronger community.</p>
            <div className="flex justify-center gap-10 mt-6">
                <div className="dropdown dropdown-center">
                    <label tabIndex={0} className="bg-green-900 text-white hover:bg-green-800 p-2 text-xl">Filter</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow text-black bg-white w-52">
                        <li><button id="All" onClick={filterByCategory}>All</button></li>
                        <li><button id="Meat" onClick={filterByCategory}>Meat</button></li>
                        <li><button id="Dairy" onClick={filterByCategory}>Dairy</button></li>
                        <li><button id="Livestock" onClick={filterByCategory}>Livestock</button></li>
                        <li><button id="Fruit" onClick={filterByCategory}>Fruit</button></li>
                        <li><button id="Vegetable" onClick={filterByCategory}>Vegetable</button></li>
                        <li><button id="Bread" onClick={filterByCategory}>Bread</button></li>
                        <li><button id="Art" onClick={filterByCategory}>Art</button></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-center">
                    <label tabIndex={0} className="bg-green-900 text-white hover:bg-green-800 p-2 text-xl">Sort by</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow text-black bg-white w-52">
                        <li><button id="AZ" onClick={sortProducts}>Alphabetically, A-Z</button></li>
                        <li><button id="ZA" onClick={sortProducts}>Alphabetically, Z-A</button></li>
                        <li><button id="LH" onClick={sortProducts}>Price, low to high</button></li>
                        <li><button id="HL" onClick={sortProducts}>Price, high to low</button></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-around flex-wrap lg:p-10 gap-2 lg:gap-8">
                {filteredProducts.map((product) => {
                    return (
                        <ProductCard product={product} key={product._id} />
                    )
                })}
            </div>
        </div>
    )
};

export default Shop;