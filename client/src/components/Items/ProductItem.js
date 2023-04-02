// import React from "react";
// import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers";
// import { useCartContext } from "../../utils/GlobalState"; 
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";
// import Shop from "../../pages/shop"

// function ProductItem(item) {
//     const [state, dispatch] = useCartContext();

//     const {
//         _id, 
//         name,
//         price,
//         stock,
//     } = item;

//     const { cart } = state;

//     const addToCart = () => {
//         const addedItem = cart.find((cartItem) => cartItem._id === _id)
//         if (addedItem) {
//             dispatch({
//                 type: UPDATE_CART_QUANTITY,
//                 id: _id, 
//                 purchaseQuantity: parseInt((addedItem.purchaseQuantity) + 1)
//             });
//         } else {
//             dispatch({
//                 type: ADD_TO_CART,
//                 product: {...item, purchaseQuantity: 1 }
//             });
//             idbPromise('cart', 'put', {...item, purchaseQuantity: 1 });
//         }
//     }


// return (
//     <div className="card px-1 py-1">
//     <Link to={`/products/${_id}`}>
//       <img
//         alt={name}
//         src={`/images/${image}`}
//       />
//       <p>{name}</p>
//     </Link>
//     <div>
//       <div>{quantity} {pluralize("item", quantity)} in stock</div>
//       <span>${price}</span>
//     </div>
//     <button onClick={addToCart}>Add to cart</button>
//   </div>
  
// );
// }

// export default ProductItem;