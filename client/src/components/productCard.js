import React, { useContext } from "react";
import notePaperbg from '../Images/notepaper.webp';
import { ADD_TO_CART } from "../components/context/actions";
import { useQuery } from "@apollo/client";
import { idbPromise } from "../utils/helpers";
import { GET_PRODUCTS } from "../utils/queries";
import  CartContext from "../components/context/CartContext";

//slide cards
//ProdcuctCrd recieves a single prop, 'product'
function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
         
  const handleAddToCart = () => {
    const { _id, name, price } = product;
    addToCart(_id, name, price);
    idbPromise('cart', 'put', {  ...product  });

  }
    

  

  // const handleAddToCart = () => {
  //   addToCart({ variables: { product } });
  //   idbPromise('cart', 'put', product);
  // }
     

    // const { loading, data } = useQuery(GET_PRODUCTS);
    // const products = data?.getProducts || [];

    //   const addToCart = () => {
    //   //const addedItem = cart.find((cartItem) => cartItem._id === _id)
    //   dispatch({
    //     type: ADD_TO_CART,
    //     product: { ...product },
    //   });
    //   idbPromise('cart', 'put', product)
    // };
    
   

  
  return (
    <>
    <div className=" flex flex-row flex-wrap m-24">
    <div  key={product._id} className="w-80 lg:w-72 m-auto my-4 grid grid-rows-8 shadow-lg shadow-black" style={{
            backgroundSize: '15rem',
            backgroundImage: `url(${notePaperbg})`,
            backgroundRepeat: 'repeat',
        }}>
            <h2 className="text-3xl font-bold border-b-black border">{product.name}</h2>
            <div className="m-3 row-span-6">
                <img class="m-auto w-24 rounded-full mt-5" src={product.image} alt={product.name} />
                <p className="text-lg">{product.product_description}</p>
                <div className="my-2">
                    <p>Price ${product.price}</p>
                    <p>product price</p>
                </div>
                <div>
                    <p>Stock</p>
                    <p>product stock</p>
                </div>
            </div>
            <div className="row-span-2">
                 <button className="btn m-3 shadow-lg  bg-slate-700 " type="button" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    </div>
    </>
  );
};
export default ProductCard;
