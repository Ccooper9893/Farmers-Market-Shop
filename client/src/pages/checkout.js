import React from "react";

import { useCartContext } from "../utils/GlobalState";

import notePaperbg from "../Images/notepaper.webp";

function Checkout() {
  const [state] = useCartContext();
  const { cart } = state;
//returned all products that are added to the cart
  return (
    <div className=" flex flex-col justify-center center-items px-4 rounded-2xl">
      {cart.length ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
          {cart.map((product) => (
            <div
              key={product._id}
              className="w-80 lg:w-72 m-auto my-4 grid grid-rows-8 shadow-lg shadow-black min-h-96"
              style={{
                backgroundSize: "15rem",
                backgroundImage: `url(${notePaperbg})`,
                backgroundRepeat: "repeat",
              }}
            >
              <h2 className="text-3xl font-bold border-b-black border">
                {product.name}
              </h2>
              <div className="m-3 row-span-6">
                <img
                  className="m-auto w-24 rounded-full mt-5"
                  src={product.image}
                  alt={product.name}
                />
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
                <button
                  className="btn m-3 shadow-lg  bg-slate-700 "
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>Cart is empty</h2>
      )}
    </div>
  );
}
export default Checkout;
