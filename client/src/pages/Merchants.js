import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MERCHANTS } from "../utils/queries";
import certifiedLocal from "../images/certifiedLocal.webp";
import certifiedSafe from "../images/certifiedSafe.webp";
import madeWithLove from "../images/madeWithLove.webp";

function Merchants() {

    const [merchants, setMerchants] = useState([]);

    useQuery(GET_MERCHANTS, {
        onCompleted: (data) => {
            console.log(data);
            setMerchants(data.getMerchants)
        },
    });

    return (
        <div className="mt-4 mb-10 mx-4">
            <div className="flex flex-row- flex-wrap justify-center gap-10 my-8">
                <img className=" w-40" src={certifiedLocal} alt="Certified Locally produced logo"></img>
                <img className=" w-40" src={certifiedSafe} alt="Certified safely produced logo"></img>
                <img className=" w-40" src={madeWithLove} alt="Certified Made with Love logo"></img>
            </div>
            <p className="secFont text-center text-lg lg:text-xl mx-4 my-4 lg:mx-20 text-black pb-4 mb-6">Our merchants are your trusted, local source for all your needs. We take pride in curating a community of reliable and safe vendors who are deeply rooted in the local area.
                When you shop with us, you can have peace of mind knowing that our merchants have been carefully selected for their commitment to quality and exceptional service. They are dedicated to providing you with products that meet the highest standards of freshness, taste, and craftsmanship.</p>
            {merchants ? (
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {merchants.map((merchant) => (
                        <div className="text-center secFont" key={merchant._id}>
                            <h1 className="text-2xl">{merchant.business_name}</h1>
                            <Link className="hover:opacity-80" to={`/merchant/${merchant._id}`}>
                                <img className="w-96 h-60 object-cover border border-black" src={merchant.image} alt={merchant.business_name}></img>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
};

export default Merchants;