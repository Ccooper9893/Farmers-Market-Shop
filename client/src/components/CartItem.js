import React, { useContext } from 'react';
import CartContext from './context/CartContext';
import { idbPromise } from '../utils/helpers';

const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);

//   const { 
//     _id,
//     name,
//     price,
//   } = item;

//   const addToCart = () => {
//     const addedItem = cart.find((cartItem) => cartItem._id === _id)
//         idbPromise('cart', 'get', {
//             ...addedItem,
//         });
//     }
  

//   const removeFromCart = item => {
//     //remove item from IDB
//     idbPromise('cart', 'delete', item);

//     //filter the item out of cart
//     const newCart = cart.filter(cartItem => cartItem._id !== item._id);

//     //update cart context with new cart state
//     setCart(newCart);
//   };

  return (
    <div className='cart-item'>
      <img src={item.image} alt={item.name} className='cart-item__image' />
      <div className='cart-item__details'>
        <p className='cart-item__name'>{item.name}</p>
        <p className='cart-item__price'>${item.price}</p>
      </div>
      {/*       <button
        className='cart-item__remove-btn'
        onClick={() => removeFromCart(item)}
      >
        Remove
      </button>  */}

    </div>
  );
};

export default CartItem;




// import React, { useContext } from 'react';
// import CartContext from '../context/CartContext';
// import './CartItem.css';

// const CartItem = ({ item }) => {
//   const { removeItem, dispatch } = useContext(CartContext);

//   return (
//     <div className='cart-item'>
//       <img src={item.image} alt={item.name} className='cart-item__image' />
//       <div className='cart-item__details'>
//         <p className='cart-item__name'>{item.name}</p>
//         <p className='cart-item__price'>${item.price}</p>
//       </div>
//       <button
//         className='cart-item__remove-btn'
//         onClick={() => removeItem(item)}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };

// export default CartItem;




// const CartItem = ({ item }) => {
//     console.log(item)
//   return (
//     <>
//       <div>
//         <img src={item.image} alt={item.name} />
//         <ul>
//           <li>Name: {item.name}</li>
//           <li>Price: {item.price}</li>
//           <li>Category: {item.category}</li>
//           <li>Description: {item.product_description}</li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default CartItem;
