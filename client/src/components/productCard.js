import React from "react";
import ProductExample from "../Images/ProductImage.png"
import { ADD_TO_CART } from "../utils/actions";
import { useCartContext } from "../utils/GlobalState";



//slide cards
function ProductCard({props}) {

  const [state, dispatch] =  useCartContext();

  const {
    image,
    name,
    _id,
    price,
    purchaseQuantity
  } = props;

  const { cart } = state
  // console.log({state})

const addToCart = () =>{
  console.log(cart)

  const itemInCart = cart.find((cartItem) => cartItem._id === props._id)
  console.log(props._id)
  if (itemInCart) {
    console.log("We will need function to update qty of the product")
}
else {
  dispatch({
    type: ADD_TO_CART,
    product: { ...props, purchaseQuantity: 1 }
  });
  console.log(cart)
}
}

  return (
    <> 
    <div className=" flex flex-row flex-wrap m-24">
    {/* {products.products.map((product) => ( */}
      <div  key={props._id}  className="card w-32 glass text-slate-300 m-3">
  <figure className="p-2"><img src={props.image} alt="car!"/></figure>
  <div className="card-body p-1 ">
    <p className="card-title text-base justify-center ">{props.name}</p>
    <p>Price: $  {props.price}</p>
    <div className="card-actions justify-center">
      <button className="sm-btn btn-grey" onClick={addToCart}>Add to cart</button>
    </div>
  </div>
</div>
    {/* )) */}
  

    
 {/* <div className="card w-32 glass text-slate-300">
  <figure className="p-2"><img src={ProductExample} alt="car!"/></figure>
  <div className="card-body p-1 ">
    <p className="card-title text-base justify-center ">{products.products.name}</p>
    <p>Price: $  {products.price}</p>
    <div className="card-actions justify-center">
      <button className="sm-btn btn-grey">Add to cart</button>
    </div>
  </div>
</div> */}
</div>
    </>
  );
}

export default ProductCard;