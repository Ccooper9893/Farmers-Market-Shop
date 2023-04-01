import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries';
import { REMOVE_PRODUCT } from '../utils/mutations';
//import CartItem from "../components/CartItem/index";


function Checkout() {
 const { loading, error, data } = useQuery(GET_PRODUCTS);
 const [removeFromCart] = useMutation(REMOVE_PRODUCT);


 if (loading) return <p>Loading</p>;
 if (error) return <p>Error</p>;


 const handleRemoveFromCart = (itemId) => {
   removeFromCart({ variables: { itemId } });
 };


 return (
   <div className='flex flex-wrap justify-center'>
   {data.getProducts.map((product) => (
     <div key={product._id} className='card m-4 shadow-lg rounded-lg overflow-hidden'>
     <img src={product.image} alt={product.name} className='w-full h-56 object-cover' />
     <div className='p-4'>
       <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
       <p className='text-white mb-4'>${product.price.toFixed(2)}</p>
       <div className='flex justify-center'>
         <button className='bg-gray-800 text-white py-2 px-4 rounded' onClick={() => handleRemoveFromCart(product._id)}>Remove</button>
       </div>
     </div>
     </div>
 ))}
   </div>
 );
}


export default Checkout;


// NEW, Reworked code; please do not remove!!
// import React, { useEffect, useState } from "react";
// import { useQuery } from "@apollo/client";
// import { Link, useParams } from "react-router-dom";
// import { useCartContext } from "../utils/GlobalState";
// import { UPDATE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART,UPDATE_CART_QUANTITY } from "../utils/actions";
// import { GET_PRODUCTS } from "../utils/queries";
// import { idbPromise } from "../utils/helpers";
// import CartItem from "../components/Items/CartItem";

// function Checkout() {
//   const [state, dispatch] = useCartContext();
//   const { id } = useParams();

//   const [selectedProduct, setSelectedProduct] = useState({});
  
//   const { loading, data } = useQuery(GET_PRODUCTS);

//   const { products, cart } = state;

//   useEffect(() => {
//     if (products.length) {
//       setSelectedProduct(products.find((product) => product._id === id));
//     } else if (data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products,
//       });
      
//       data.products.forEach((product) => {
//         idbPromise('products', 'put', product);
//       });
//     } else if (!loading) {
//       idbPromise('products', 'get').then((indexedItems) => {
//         dispatch({
//           type: UPDATE_PRODUCTS,
//           products: indexedItems,
//         });
//       });
//     }
//   }, [products, data, loading, dispatch, id]);

//   const addToCart = () => {
//     const addedItem = cart.find((CartItem) => CartItem._id === id);
//     if (addedItem) {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: id, 
//         purchaseQuantity: parseInt(addedItem.purchaseQuantity) +1,
//       });
//       idbPromise('cart', 'put', {
//         ...addedItem,
//         purchaseQuantity: parseInt(addedItem.purchaseQuantity) +1,
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_CART,
//         product: { ...selectedProduct, purchaseQuantity: 1 },
//       });
//       idbPromise('cart', 'put', {...selectedProduct, purchaseQuantity: 1 });
//     }
//   };

//   const removeItem = () => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       id: selectedProduct._id,
//     });
//   };

//   return (
//     <div>
//       {selectedProduct && cart ? (
//         <div className="container my-2">
//           <Link to="/">Keep Shopping!</Link>
//           <h2>{selectedProduct.name}</h2>
//           <p>{selectedProduct.description}</p>
//           <p>
//             <strong>Price:</strong>${selectedProduct.price}{' '}
//             <button onClick={addToCart}></button>
//             <button disabled={!cart.find((p) => p._id === selectedProduct._id)} onClick={removeItem}>Remove</button>
//           </p>

//           <img src={selectedProduct.image} alt={selectedProduct.name} />
//         </div>
//       ) : null}
//       <CartItem />
//       </div>
//   );
// }

// export default Checkout;
