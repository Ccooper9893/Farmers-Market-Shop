import React from "react";
import farmerBg from "../images/f1.webp";
function Home() {
    return (
        <div className="relative">
            <h6 className="w-full pt-4 pb-2 text-center text-md bg-stone-800">Our Farmer's Market is open Monday through Friday from 11AM to 5PM</h6>
            <div className="relative">
            <img src={farmerBg}></img>
            <div className="absolute bg-black w-2/5 h-3/5 bg-opacity-60 rounded-lg" style={{top: "15%", right: "10%"}}>
                <p className="text-5xl text-center p-4 mt-10 text-white">We look forward to seeing you at the Farmer's Market!</p>
                <p className="text-4xl text-center p-4 mt-10 text-white">Come on down and support your local farmers and artists or shop on our online store!</p>
            </div>
            </div>
        </div>
    )
};

export default Home;