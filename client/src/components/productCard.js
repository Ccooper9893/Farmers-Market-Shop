import React from "react";
import ProductExample from "../Images/ProductImage.png"
import { ADD_TO_CART } from "../utils/actions";
import { useCartContext } from "../utils/GlobalState";



//slide cards
function ProductCard(products) {
  return (
    <> 
    <div className=" flex flex-row flex-wrap m-24">
    {products.products.map((product) => (
      <div  key={product._id}  className="card w-32 glass text-slate-300 m-3">
  <figure className="p-2"><img src={ProductExample} alt="car!"/></figure>
  <div className="card-body p-1 ">
    <p className="card-title text-base justify-center ">{product.name}</p>
    <p>Price: $  {product.price}</p>
    <div className="card-actions justify-center">
      <button className="sm-btn btn-grey" onClick={addToCart}>Add to cart</button>
    </div>
  </div>
</div>
    ))
  

    }
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