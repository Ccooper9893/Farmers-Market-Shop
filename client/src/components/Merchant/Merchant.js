import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MERCHANT } from "../../utils/queries";
import ProductCard from "../Product/ProductCard";

function Merchant() {

    const { id } = useParams();

    //Grabbing product details
    const { data: merchantData } = useQuery(GET_MERCHANT, {
        variables: { getMerchantId: id }
    });

    const { getMerchant } = merchantData || {};

    return (
        <div className="min-h-screen w-full">
            {getMerchant ? (
                <>
                    <div className="flex flex-row flex-wrap text-center justify-center my-6">
                        <img className="h-96 object-cover" src={getMerchant.image} alt={getMerchant.business_name} style={{width: '50rem'}}></img>
                        <div className="w-96 mx-3">
                            <h1 className="text-black text-2xl border-b border-black my-4">{getMerchant.business_name}</h1>
                            <p className="text-black">{getMerchant.business_description}</p>
                        </div>

                    </div>
                    <h4 className="text-center text-lg text-black mt-10 underline mb-4">Our Products</h4>
                    {getMerchant.products && (
                        <div className="flex justify-center flex-wrap gap-8 mx-40 mb-20">
                            {getMerchant.products.map((product) => {
                                return (
                                    <ProductCard product={product} key={product._id} />
                                )
                            })}
                        </div>
                    )}
                </>
            ) : null}
        </div>
    )
};

export default Merchant;