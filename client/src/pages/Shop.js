import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../utils/queries";
import ProductCard from "../components/Product/ProductCard";
import farmFreshPic from "../images/farmfresh.webp";


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
        <>
            {products ? (
                <div className="mx-4 lg:mx-52 mt-8 min-h-screen">
                    <img className="mx-auto w-60 my-3" src={farmFreshPic} alt="Farm fresh logo"></img>
                    <p className="text-black text-center text-lg lg:text-xl border-b border-black pb-4 secFont">Our farm-fresh produce, lovingly grown by our local farmers without harmful pesticides or chemicals, offers you the freshest and healthiest fruits and vegetables possible. But that's not all! We also celebrate the talents of our local artisans, who craft exquisite creations ranging from handcrafted jewelry to stunning artwork. By supporting our local farmers and artisans, you're not only enjoying sustainable and wholesome products, but you're also fostering a stronger community where creativity thrives.</p>
                    <div className="flex justify-center gap-10 mt-6">
                        <div className="dropdown dropdown-center">
                            <button tabIndex={0} className="bg-green-900 text-white hover:bg-green-800 p-2 text-xl w-28">Filter by</button>
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
                            <button tabIndex={0} className="bg-green-900 text-white hover:bg-green-800 p-2 text-xl w-28">Sort by</button>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow text-black bg-white w-52">
                                <li><button id="AZ" onClick={sortProducts}>Alphabetically, A-Z</button></li>
                                <li><button id="ZA" onClick={sortProducts}>Alphabetically, Z-A</button></li>
                                <li><button id="LH" onClick={sortProducts}>Price, low to high</button></li>
                                <li><button id="HL" onClick={sortProducts}>Price, high to low</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center flex-wrap lg:p-10 gap-4 lg:gap-10 mt-4">
                        {filteredProducts.map((product) => {
                            return (
                                <ProductCard product={product} key={product._id} />
                            )
                        })}
                    </div>
                </div>
            ) : (
                null
            )}
        </>
    )
};

export default Shop;