import React from "react";
import { useCartContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item, removeItem  }) => {
    const [, dispatch] = useCartContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            id: item._id
        })
        idbPromise('cart', 'delete', {...item});
    };

    const onChange = (e) => {
        const value = e.target.value;
        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                id: item._id
            });
            idbPromise('cart', 'delete', {...item});
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                id: item._id,
                purchaseQuantity: parseInt(value)
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
          }
    }
    
    return (
      <div className="flex-row">
        <div>
          <img src={`/images/${item.image}`} alt="" />
        </div>
        <div>
          <div>
            {item.name}, ${item.price}
          </div>
          <div>
            <span>Qty:</span>
            <input
              type="number"
              placeholder="1"
              value={item.quantity}
              onChange={onChange}
            />
          </div>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      </div>
    );
    
};

  export default CartItem;