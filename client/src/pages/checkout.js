import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries';
import { REMOVE_FROM_CART } from '../utils/actions';
//import CartItem from "../components/CartItem/index";


function Checkout() {
 const { loading, error, data } = useQuery(GET_PRODUCTS);
 //const [removeFromCart] = useMutation(REMOVE_FROM_CART);


 if (loading) return <p>Loading</p>;
 if (error) return <p>Error</p>;


//  const handleRemoveFromCart = (itemId) => {
//    removeFromCart({ variables: { itemId } });
//  };


 return (
   <div className='flex flex-wrap justify-center'>
   {data.getProducts.map((product) => (
     <div key={product._id} className='card m-4 shadow-lg rounded-lg overflow-hidden'>
     <img src={product.image} alt={product.name} className='w-full h-56 object-cover' />
     <div className='p-4'>
       <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
       <p className='text-white mb-4'>${product.price.toFixed(2)}</p>
       <div className='flex justify-center'>
       <button className='bg-gray-800 text-white py-2 px-4 rounded'>Remove</button>
         {/* <button className='bg-gray-800 text-white py-2 px-4 rounded' onClick={() => handleRemoveFromCart(product._id)}>Remove</button> */}
       </div>
     </div>
     </div>
 ))}
   </div>
 );
}


export default Checkout;