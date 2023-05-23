import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, CLEAR_CART } from "../../utils/actions";
import trashCanIcon from "../../images/trashcanIcon.webp";

function Cart() {
    const [state, dispatch] = useStoreContext();
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
        <div className="flex flex-col justify-center text-center secFont">
            <h3 className="text-2xl border-b">Shopping Cart</h3>
            <h4 className="mb-4">
                Total: $ (
                {cart.reduce((totalPrice, item) => totalPrice + (item.getProduct.price * item.quantity), 0).toFixed(2)}
                )
            </h4>
            {cart.map((product) => {
                return (
                    <div className="flex items-center mx-auto gap-6 my-1">
                        <h4><span>{product.quantity} x </span>{product.getProduct.name}</h4>
                        <button onClick={() => removeFromCart(product.getProduct._id)}><img className="w-4 h-5" src={trashCanIcon} alt="delete icon"></img></button>
                    </div>
                )
            })}
        </div>
    )
};

export default Cart;