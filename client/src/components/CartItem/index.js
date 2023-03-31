import React from "react";
import { useCartContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART } from "../../utils/actions";

const cartItem = ({ item }) => {
    const [, dispatch] = useCartContext();

    const removeItem = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            id: item._id
        });
        // add idbPromise here 
    };

    const onChange = (e) => {
        const value = e.target.value;
        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                id: item._id
            });
            //add idbPromise
        }
    }

    return (
        <div className="flex-row">
          <div>
            <img
              src={`/images/${product.image}`}
              alt=""
            />
          </div>
          <div>
            <div>{item.name}, ${product.price}</div>
            <div>
              <span>Qty:</span>
              <input
                type="number"
                placeholder="1"
                value={product.quantity}
                onChange={onChange}
              />
              <span
                role="img"
                aria-label="trash"
                onClick={() => removeItem(item)}
              >
                🗑️
              </span>
            </div>
          </div>
        </div>
      );
    
}

 export default cartItem;
