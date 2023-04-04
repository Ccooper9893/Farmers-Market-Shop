
import React from "react";
import { ADD_TO_CART } from "../utils/actions";
import { useCartContext } from "../utils/GlobalState";
import notePaperbg from "../Images/notepaper.webp";


//slide cards
function ProductCard({props}) {
 const [state, dispatch] =  useCartContext();
 const { name, _id, price} = props;
 const { cart } = state;
const addToCart = async () => {
 const itemInCart = cart.find((cartItem) => cartItem._id === props.id);
 if (itemInCart) {
   console.log('We will need function to update qty of the product');
 } else {
   dispatch({
     type: ADD_TO_CART,
     product: { ...props }
   });
 };
}
 return (
   <div className=" flex flex-row flex-wrap m-2 ">
   {/* {products.products.map((product) => ( */}
   <div  key={props._id} className="w-80 lg:w-72 m-auto my-4 grid grid-rows-8 shadow-lg shadow-black min-h-96" style={{
           backgroundSize: '15rem',
           backgroundImage: `url(${notePaperbg})`,
           backgroundRepeat: 'repeat',
       }}>
           <h2 className="text-3xl font-bold border-b-black border">{props.name}</h2>
           <div className="m-3 row-span-6">
               <img className="m-auto w-24 rounded-full mt-5" src={props.image} alt={props.name} />
               <p className="text-lg">{props.product_description}</p>
               <div className="my-2">
                   <p>Price ${props.price}</p>
               </div>
               <div>
                   <p>Stock</p>
                   <p>{props.stock}</p>
               </div>
           </div>
           <div className="row-span-2">
               <button className="btn m-3 shadow-lg  bg-slate-700 " type="button" onClick={addToCart}>Add to Cart</button>
           </div>
       </div>
</div>
 );
}
export default ProductCard;