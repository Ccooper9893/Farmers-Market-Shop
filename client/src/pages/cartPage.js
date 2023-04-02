import { useContext } from "react";
import CartContext from "../components/context/CartContext";
import CartState from "../components/context/CartState";
import CartItem from "../components/CartItem";


const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { removeFromCart } = useContext(CartState);

  return (
    <div className=''>
      <div className=''>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} removeItem={removeFromCart} />
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

