import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Auth from "../utils/jwt-auth";
import MerchantProduct from "../components/Product/MerchantProduct";
import NewProduct from "../components/NewProduct/NewProduct";
import logoutIcon from "../images/logouticonOpt.webp";

function Account() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [productData, setProductData] = useState([]);
    const loggedIn = Auth.loggedIn();

    useEffect(() => {
        if (!loggedIn) {
            navigate("/login");
        }
    }, [loggedIn, navigate]);

    useQuery(GET_ME, {
        onCompleted: (data) => {
            if (!data.me) {
                Auth.logout();
                navigate("/login");
            };
            setUserData(data.me);
            if(data.me.merchant) {
                setProductData(data.me.products);
            }
        },
    });

    const addProduct = (newProduct) => {
        setProductData([...productData, newProduct])
    };

    const handleLogout = () => {
        Auth.logout();
        window.location.replace('/login');
    }

    return (
        <div>
            {!userData ? (
                <div className="min-h-screen">
                    Loading...
                    {userData}
                </div>
            ) : (
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <div className="grid grid-cols-8 text-center secFont">
                            <div className="col-span-8 lg:col-span-2 border-black lg:border-r">
                                <div className="flex flex-col p-3 mx-3 py-4">
                                    <div className="flex flex-col">
                                        <button onClick={handleLogout}><img className="h-6 w-6 mx-auto mb-2" src={logoutIcon} alt="Logout button"></img></button>
                                        <h2 className="text-3xl border-b mb-3">ACCOUNT</h2>
                                        <ul className="text-center">
                                            <li>Email: {userData.email}</li>
                                        </ul>
                                    </div>
                                    {!userData.merchant ? null : (
                                        <ul className="text-center">
                                            <li className="text-2xl my-3 mx-10 border-b" >{userData.business_name}</li>
                                            <li className="text-md">Phone:</li>
                                            <li className="text-sm">{userData.phone_number}</li>
                                            <li className="text-md mt-3">Address:</li>
                                            <li className="text-sm">{userData.address}</li>
                                            <li><p className="my-5">{userData.business_description}</p></li>
                                            <li><img className="m-auto" src={userData.image} alt={userData.business_name}></img></li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="col-span-8 lg:col-span-6 h-full">
                                {!userData.merchant ? null : (
                                    <div>
                                        <h2 className="text-2xl border-b mx-20 pt-3">
                                            INVENTORY
                                        </h2>
                                        <div className="mt-4">
                                            <label htmlFor="my-drawer-4" className="drawer-button bg-green-900 text-white hover:bg-green-800 px-3 py-2 w-32">New Product</label>
                                        </div>
                                        <div className="flex flex-col justify-center py-4 rounded-2xl">
                                            {productData
                                                ? (<div className="flex flex-row flex-wrap justify-center gap-8">
                                                    {productData.map((product) => (
                                                        <MerchantProduct key={product._id} product={product} />
                                                    ))}
                                                </div>)
                                                : (<p>You have no products</p>)
                                            }
                                        </div>
                                    </div>
                                )}
                                <div className="h-screen">
                                    <h2 className="text-2xl border-b mx-20 pt-3">
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
                            <NewProduct onAddProduct={addProduct} />
                        </div>
                    </div>
                </div>


            )}
        </div>
    )
};

export default Account;