import React from "react";
import ProductExample from "../Images/ProductImage.png"
import { ADD_TO_CART } from "../utils/actions";
import { useCartContext } from "../utils/GlobalState";



//slide cards
function ProductCard(product) {
  const [state, dispatch] = useCartContext();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      product: {
        name: product.name,
        price: product.price,
        image: product.image
      }
    });
  };

  return (
    <>
 <div className="card w-32 glass text-slate-300">
  <figure className="p-2"><img src={ProductExample} alt="car!"/></figure>
  <div className="card-body p-1 ">
    <p className="card-title text-base justify-center ">Product name{product.name}</p>
    <p>Price: $  {product.price}</p>
    <div className="card-actions justify-center">
      <button className="sm-btn btn-grey" onClick={addToCart}>Add to cart</button>
    </div>
  </div>
</div>

    </>
  );
}

export default ProductCard;