// import React, { useEffect } from "react";
// import { useLazyQuery } from "@apollo/client";
// import { idbPromise } from "../../utils/helpers"
// import CartItem from "../Items/CartItem";
// import Auth from "../../utils/auth";
// import { useCartContext } from "../../utils/GlobalState";


// function UpdateCart({ cartItems, clearCart, updateQuantity, removeFromCart }) {
//   const [removeFromCartMutation] = useMutation(REMOVE_PRODUCT);

//   const removeItem = (itemId) => {
//     removeFromCartMutation({ variables: { itemId } });
//     removeFromCart(itemId);
//   };

//   const cartList = cartItems.map((item) => (
//     <li key={item.id}>
//       <div>{item.name}</div>
//       <div>{item.price}</div>
//       <div>{item.quantity}</div>
//       <button onClick={() => removeItem(item.id)}>Remove Item</button>
//       <input
//         type="number"
//         min="1"
//         value={item.quantity}
//         onChange={(e) => updateQuantity(item.id, e.target.value)}
//       />
//     </li>
//   ));

//   return (
//     <div>
//       <ul>{cartList}</ul>
//       <button onClick={clearCart}>Clear Cart</button>
//     </div>
//   );
// }

// export default UpdateCart;

