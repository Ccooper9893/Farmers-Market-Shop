import React from "react";

function Cart({ items }) {
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
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
