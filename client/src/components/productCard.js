import React from "react";
import ProductExample from "../Images/ProductImage.png"

//slide cards
function ProductCard() {
  return (
    <>
 <div className="card w-32 glass text-slate-300">
  <figure className="p-2"><img src={ProductExample} alt="car!"/></figure>
  <div className="card-body p-1 ">
    <p className="card-title text-base justify-center ">Product name</p>
    <p>Price: $ </p>
    <div className="card-actions justify-center">
      <button className="sm-btn btn-grey">Add to cart</button>
    </div>
  </div>
</div>

    </>
  );
}

export default ProductCard;
