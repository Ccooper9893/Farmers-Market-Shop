// import React, { useEffect } from "react";
// import { useCartContext } from "../../utils/GlobalState";
// import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";
// import CartItem from "../Items/CartItem";
// import Auth from "../../utils/auth";


// const Cart = () => {
//   const [state, dispatch] = useCartContext();

//   // useEffect(() => {
//   //   async function getCart() {
//   //     const cart = await idbPromise('cart', 'get'); //idbPromise
//   //     dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
//   //     console.log('cart component');
//   //   }

//   //   if (!state.cart.length) {
//   //     getCart();
//   //   }
//   // }, [state.cart.length, dispatch]);

//   function calculateTotal() {
//     if (!state.cart) return 0;
//     let sum = 0;
//     state.cart.forEach((item) => {
//       sum += item.price * item.purchaseQuantity;
//     });
//     return sum.toFixed(2);
//   }

//   if (!state.cartOpen) {
//     return (
//       <div className="cart-closed">
//         <span role="img" aria-label="trash">
//           🛒
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="cart">
//       <div className="">
//       </div>
//       <h2>Shopping Cart</h2>
//       {state.cart.length ? (
//         <div>
//           {state.cart.map((item) => (
//             <CartItem key={item._id} item={item} />
//           ))}

//           <div className="flex-row space-between">
//             <strong>Total: ${calculateTotal()}</strong>

//             {Auth.loggedIn() ? (
//               <button onClick={() => alert("This feature is not yet implemented!")}>Checkout</button>
//             ) : (
//               <span>(log in to check out)</span>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h3>
//           <span role="img" aria-label="shocked">
//             😱
//           </span>
//           You haven't added anything to your cart yet!
//         </h3>
//       )}
//     </div>
//   );
// };

// export default Cart;