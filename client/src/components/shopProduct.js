import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import notePaperbg from '../../Images/notepaper.webp';

function Product({ product}) {

//Add all add to cart functions here 






    return (
        <div className="w-80 lg:w-72 m-auto my-4 grid grid-rows-8 shadow-lg shadow-black" style={{
            backgroundSize: '15rem',
            backgroundImage: `url(${notePaperbg})`,
            backgroundRepeat: 'repeat',
        }}>
            <h2 className="text-3xl font-bold border-b-black border">product.name</h2>
            <div className="m-3 row-span-6">
                <img class="m-auto w-24 rounded-full mt-5" src={product.image} alt={product.name} />
                <p className="text-lg">{product.product_description}</p>
                <div className="my-2">
                    <p>Price $</p>
                    <p>product price</p>
                </div>
                <div>
                    <p>Stock</p>
                    <p>product stock</p>
                </div>
            </div>
            <div className="row-span-2">
                <button className="btn m-3 shadow-lg  bg-slate-700 " type="button" onClick={}>Update</button>
            </div>
        </div>
    )
};

export default Product;