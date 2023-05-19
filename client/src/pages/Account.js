import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Auth from "../utils/jwt-auth";
import ProductCard from "../components/Product/ProductCard";
function Account() {
    const [userData, setUserData] = useState(null);

    if (!Auth.loggedIn()) {
        window.location.replace('/login');
    };

    useQuery(GET_ME, {
        onCompleted: (data) => setUserData(data.me),
    });
    if (userData) {
        console.log(userData);
    }
    return (
        <div>
            {!userData ? (
                <div>Loading...</div>
            ) : (
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <div className="grid grid-cols-8 text-center secFont">
                            <div className="col-span-8 lg:col-span-2 bg-stone-800">
                                <div className="flex flex-col p-3 mx-3 text-white py-4">
                                    <div className="flex flex-col">
                                        <h2 className="text-4xl font-iight text-white my-3 border-b pb-2" >ACCOUNT</h2>
                                        <img
                                            className="rounded-full w-28 m-auto"
                                            src="https://storage.googleapis.com/farmers-market-images/1680277238037-farmlogo.webp"
                                            alt="farm logo"
                                        >
                                        </img>
                                        <ul className="m-auto">
                                            <li>Username: {userData.username}</li>
                                            <li>email: {userData.email}</li>
                                        </ul>
                                    </div>
                                    {!userData.merchant ? null : (
                                        <ul className="mt-8">
                                            <li className="text-4xl font-iight text-white my-3 border-b pb-2" >{userData.business_name}</li>
                                            <li><img className="m-auto" src={userData.image} alt={userData.business_name}></img></li>
                                            <li><p className="my-5">{userData.business_description}</p></li>
                                            <li className="text-sm font-bold">CONTACT: {userData.phone_number}</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="col-span-8 lg:col-span-6 h-full">
                                {!userData.merchant ? null : (
                                    <div>
                                        <h2 className="text-2xl border-b border-black mx-10 pt-3">
                                            INVENTORY
                                        </h2>
                                        <div className="mt-4">
                                        <label htmlFor="my-drawer-4" className="drawer-button bg-green-900 text-white hover:bg-green-800 px-3 py-2 w-32">New Product</label>
                                        </div>
                                        <div className="flex flex-col justify-center py-4 rounded-2xl">
                                            {userData.products.length
                                                ? (<div className="flex flex-row flex-wrap justify-center gap-8">
                                                    {userData.products.map((product) => (
                                                        <ProductCard key={product._id} product={product} />
                                                    ))}
                                                </div>)
                                                : (<p>You have no products</p>)
                                            }
                                        </div>
                                    </div>
                                )}
                                <div className="h-screen">
                                    <h2 className="text-2xl border-b border-black mx-10 pt-3">
                                        PURCHASES
                                    </h2>
                                    {userData.purchases.length ? null : (
                                        <p className="mt-8 font-bold text-lg">You have made no purchases</p>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <div className="p-4 w-80 bg-base-100">
                            <h1>New Product</h1>
                        </div>
                    </div>
                </div>


            )}
        </div>
    )
};

export default Account;