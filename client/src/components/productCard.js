import React from "react";
import ProductExample from "../Images/ProductImage.png"

//slide cards
function ProductCard(product) {
  return (
    <>
 <div className="card w-32 glass text-slate-300">
  <figure className="p-2"><img src={ProductExample} alt="car!"/></figure>
  <div className="card-body p-1 ">
    <p className="card-title text-base justify-center ">Product name{product.name}</p>
    <p>Price: $  {product.price}</p>
    <div className="card-actions justify-center">
      <button className="sm-btn btn-grey">Add to cart</button>
    </div>
  </div>
</div>

    </>
  );
}

export default ProductCard;
