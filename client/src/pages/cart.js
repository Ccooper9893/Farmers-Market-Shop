// import React, { useState } from "react";
// import UpdateCart from "../components/Cart/UpdateCart";
// import Checkout from "../pages/checkout";

// function ParentComponent() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const updateQuantity = (itemId, quantity) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === itemId ? { ...item, quantity: parseInt(quantity) } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const removeFromCart = (itemId) => {
//     const updatedCart = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCart);
//   };

//   return (
//     <div>
//       <UpdateCart
//         cartItems={cartItems}
//         clearCart={clearCart}
//         updateQuantity={updateQuantity}
//         removeFromCart={removeFromCart}
//       />
//       <Checkout cartItems={cartItems} addToCart={addToCart} />
//     </div>
//   );
// }

// export default ParentComponent;