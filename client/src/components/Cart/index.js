import React from "react";
import { useCartContext } from "../../utils/GlobalState";


function Cart({ items }) {
  const [state, dispatch] =  useCartContext();
  console.log(state)
  return (
    <div>
      <h2>Your cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
