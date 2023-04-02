import React from "react";
import ProductExample from "../Images/ProductImage.png"
import { ADD_TO_CART } from "../utils/actions";
import { useCartContext } from "../utils/GlobalState";
import notePaperbg from '../Images/notepaper.webp';


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
    <div className=" flex flex-row flex-wrap m-2 ">
    {/* {products.products.map((product) => ( */}



    <div  key={props._id} className="w-80 lg:w-72 m-auto my-4 grid grid-rows-8 shadow-lg shadow-black min-h-96" style={{
            backgroundSize: '15rem',
            backgroundImage: `url(${notePaperbg})`,
            backgroundRepeat: 'repeat',
        }}>
            <h2 className="text-3xl font-bold border-b-black border">{props.name}</h2>
            <div className="m-3 row-span-6">
                <img class="m-auto w-24 rounded-full mt-5" src={props.image} alt={props.name} />
                <p className="text-lg">{props.product_description}</p>
                <div className="my-2">
                    <p>Price ${props.price}</p>
                    <p>product price</p>
                </div>
                <div>
                    <p>Stock</p>
                    <p>product stock</p>
                </div>
            </div>
            <div className="row-span-2">
                {/* <button className="btn m-3 shadow-lg  bg-slate-700 " type="button" onClick={}>Update</button> */}
            </div>
        </div>


{/* 
      <div  key={props._id}  className="card w-32 glass text-slate-300 m-3">
  <figure className="p-2"><img src={props.image} alt="car!"/></figure>
  <div className="card-body p-1 ">
    <p className="card-title text-base justify-center ">{props.name}</p>
    <p>Price: $  {props.price}</p>
    <div className="card-actions justify-center">
      <button className="sm-btn btn-grey" onClick={addToCart}>Add to cart</button>
    </div>
  </div>
</div> */}
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

