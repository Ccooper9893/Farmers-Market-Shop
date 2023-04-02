import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_HIDE_CART } from "./actions";
import { idbPromise } from "../../utils/helpers";


const CartState = ({ children }) => {
    const initialState = {
      //set initial state of cart to empty
      cartItems: [],
    };
    
    //use reducer hook to manage state and dispatch actions
    const [state, dispatch] = useReducer(CartReducer, initialState);
    
    //fetch cart items from indexedDB and set the state
    useEffect(() => {
      const getCartItems = async () => {
        const cartItems = await idbPromise('cart', 'get');
        if (cartItems) {
          dispatch({ type: ADD_TO_CART, payload: cartItems });
        }
      };
  
      getCartItems();
    }, []);
    
    //save cart items to indexedDB whenever the cartItems state changes
    useEffect(() => {
      const saveCartItems = async () => {
        await idbPromise('cart', 'put', state.cartItems);
      };
  
      saveCartItems();
    }, [state.cartItems]);
    
    //add an item to the cart
    const addToCart = (item) => {
      dispatch({ type: ADD_TO_CART, payload: item });
    };
    
    //remove an item from the cart
    const removeItem = (id) => {
      dispatch({ type: REMOVE_FROM_CART, payload: id });
    };
    
    // return the CartContext provider with cartItems, addToCart, and removeItem as its value
    // wrap entire <App /> in <CartContext.Provider> - index.js
    //wrap the {children} passed into the 'CartState' component, allowing any children components to access the state and methods from CartContext
    return (
      <CartContext.Provider
        value={{
          cartItems: state.cartItems,
          addToCart,
          removeItem,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartState;
  
