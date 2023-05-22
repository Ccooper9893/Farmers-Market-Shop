import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MERCHANTS } from "../utils/queries";

function Merchants() {

    const [merchants, setMerchants] = useState([]);

    useQuery(GET_MERCHANTS, {
        onCompleted: (data) => {
            console.log(data);
            setMerchants(data.getMerchants)
        },
    });

    return (
        <div className="mt-6 mb-10 mx-4">
            {merchants ? (
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {merchants.map((merchant) => (
                        <div className="text-center secFont" key={merchant._id}>
                            <h1 className="text-2xl">{merchant.business_name}</h1>
                            <img className="w-96 h-60 object-cover border border-black" src={merchant.image} alt={merchant.business_name}></img>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
};

export default Merchants;