import React from "react";
import { Link } from "react-router-dom";
import farmerBg from "../images/f1.webp";
function Home() {
    return (
        <div>
            <h6 className="w-full pt-4 pb-2 text-center text-md bg-stone-800">Our Farmer's Market is open Monday through Friday from 11AM to 5PM</h6>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${farmerBg})` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-3xl p-10 bg-black bg-opacity-70">
                        <h1 className="mb-5 text-2xl lg:text-4xl">We look forward to seeing you at the Farmer's Market!</h1>
                        <p className="mb-5 text-lg lg:text-2xl">Come on down and support your local farmers and artists or shop for products on our online store!</p>
                        <Link to="/shop" className="bg-green-900 text-white hover:bg-green-800 p-3 text-lg rounded-lg">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;