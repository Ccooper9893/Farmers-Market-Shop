import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cart from "../components/Cart";
import { useCartContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY, ADD_TO_CART, UPDATE_PRODUCTS } from "../utils/actions";
import { GET_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import { useQuery } from "@apollo/client";
import notePaperbg from "../Images/notepaper.webp";



function Checkout() {
  const [state] = useCartContext();

  const { cart } = state;

console.log(state);
console.log(cart);

  return (
    
<div className=" flex flex-row flex-wrap m-2 my-3">
{ cart.length ? ( <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
  {cart.map((product) => (
    <div  key={product._id} className="w-80 lg:w-72 m-auto my-4 grid grid-rows-8 shadow-lg shadow-black min-h-96" style={{
      backgroundSize: '15rem',
      backgroundImage: `url(${notePaperbg})`,
      backgroundRepeat: 'repeat',
  }}>
      <h2 className="text-3xl font-bold border-b-black border">{product.name}</h2>
      <div className="m-3 row-span-6">
          <img className="m-auto w-24 rounded-full mt-5" src={product.image} alt={product.name} />
          <p className="text-lg">{product.product_description}</p>
          <div className="my-2">
              <p>Price ${product.price}</p>
              <p>product price</p>
          </div>
          <div>
              <p>Stock</p>
              <p>product stock</p>
          </div>
      </div>
      <div className="row-span-2">
          <button className="btn m-3 shadow-lg  bg-slate-700 " type="button">Add to Cart</button>
      </div>
  </div>

))}
  
</div>
): (
  <h2>Cart is empty</h2>
)} 

</div>
 );
}

export default Checkout;