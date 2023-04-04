import React from "react";
import { useCartContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
import {
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../utils/actions";
function Checkout() {
  const [state, dispatch] = useCartContext();
  const { cart } = state;
  const removeFromCart = async (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: id,
    });
  };
  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };
  return (
    <div className="overflow-x-auto w-full">
      <div colSpan="4" className="text-center text-white py-4">
        {cart.length === 1 && (
          <p>
            <span className="font-bold text-xl">1</span>ITEM IN YOUR CART
          </p>
        )}
        {cart.length > 1 && (
          <p>
            <span className="font-bold text-xl">{cart.length}</span> ITEMS IN
            YOUR CART
          </p>
        )}
        Total: $ (
        {cart.reduce((total, item) => total + item.price, 0).toFixed(2)})
      </div>
      <div colSpan="4" className="text-center text-white font-bold py-4">
        <Link to="/shop">
          <button className="btn btn-ghost ml-4" onClick={() => clearCart()}>
            Continue Shopping
          </button>
        </Link>
      </div>
      <table className="table mx-auto">
        {/* head */}
        <thead></thead>
        <tbody>
          {cart.length ? (
            cart.map((product) => (
              <tr key={product._id}>
                <td className="bg-white opacity-75">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-stone-800 bg-white">
                        {product.name}
                      </div>
                      <div className="text-sm  text-stone-800 opacity-75">
                        {product.product_description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className=" text-stone-800 bg-white opacity-75">
                  <button
                    className="btn btn-outline btn-error btn-xs"
                    onClick={() => removeFromCart(product._id)}
                  >
                    Remove from Cart
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-center  text-stone-800 bg-white opacity-75"
              >
                Your cart is empty...
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div colSpan="4" className="text-center text-white font-bold py-4">
        <button className="btn btn-ghost ml-4" onClick={() => clearCart()}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
export default Checkout;
