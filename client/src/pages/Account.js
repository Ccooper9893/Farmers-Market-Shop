import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Auth from "../utils/jwt-auth";
import ProductCard from "../components/Product/ProductCard";
import NewProduct from "../components/NewProduct/NewProduct";

function Account() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [productData, setProductData] = useState([]);
    const loggedIn = Auth.loggedIn();

    useEffect(() => {
        if (!loggedIn) {
          navigate("/login");
        }
      }, [loggedIn]);

    useQuery(GET_ME, {
        onCompleted: (data) => {
            setUserData(data.me);
            setProductData(data.me.products);
        },
    });

    const addProduct = (newProduct) => {
        setProductData([...productData, newProduct])
    };

    return (
        <div>
            {!userData ? (
                <div>Loading...</div>
            ) : (
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <div className="grid grid-cols-8 text-center secFont">
                            <div className="col-span-8 lg:col-span-2 bg-stone-700">
                                <div className="flex flex-col p-3 mx-3 text-white py-4">
                                    <div className="flex flex-col">
                                        <h2 className="text-3xl text-white border-b mb-3">Account</h2>
                                        <ul className="m-auto">
                                            <li>Email: {userData.email}</li>
                                        </ul>
                                    </div>
                                    {!userData.merchant ? null : (
                                        <ul className="mt-8">
                                            <li className="text-2xl text-white my-3 mx-10 border-b" >{userData.business_name}</li>
                                            <li className="text-sm">Phone: {userData.phone_number}</li>
                                            <li className="text-sm">Address:{userData.address}</li>
                                            <li><p className="my-5">{userData.business_description}</p></li>
                                            <li><img className="m-auto" src={userData.image} alt={userData.business_name}></img></li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="col-span-8 lg:col-span-6 h-full">
                                {!userData.merchant ? null : (
                                    <div>
                                        <h2 className="text-2xl border-b border-black mx-20 pt-3">
                                            INVENTORY
                                        </h2>
                                        <div className="mt-4">
                                        <label htmlFor="my-drawer-4" className="drawer-button bg-green-900 text-white hover:bg-green-800 px-3 py-2 w-32">New Product</label>
                                        </div>
                                        <div className="flex flex-col justify-center py-4 rounded-2xl">
                                            {productData
                                                ? (<div className="flex flex-row flex-wrap justify-center gap-8">
                                                    {productData.map((product) => (
                                                        <ProductCard key={product._id} product={product} />
                                                    ))}
                                                </div>)
                                                : (<p>You have no products</p>)
                                            }
                                        </div>
                                    </div>
                                )}
                                <div className="h-screen">
                                    <h2 className="text-2xl border-b border-black mx-20 pt-3">
                                        PURCHASES
                                    </h2>
                                    {userData.purchases.length ? null : (
                                        <p>You have made no purchases</p>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* New Product Drawer */}
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <div className="p-4 w-80 bg-base-100">
                            <NewProduct onAddProduct={addProduct}/>
                        </div>
                    </div>
                </div>


            )}
        </div>
    )
};

export default Account;