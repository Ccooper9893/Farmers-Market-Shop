import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

// the CartReducer defines a reducer function for managing the state of the cart

// CartReducer takes in two arguements, the current state of the cart and an action object
const CartReducer = (state, action) => {
  switch (action.type) {
    // when ADD_TO_CART action is dispatched:
    case ADD_TO_CART: {
    // returns a new state object that is a copy of the previous state, but with the cartItems array updated to include the new item that was added to the cart
    // we spread state to create a copy of the state object so we can then append the new item to the cartItems array using another ...state 
    return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
    }
  }
    // when REMOVE_FROM_CART action is dispatched:
    case REMOVE_FROM_CART: {
      // reducer returns a new state object that is a copy of the previous state, but with the cartItems array updated to exclude the item that was removed from the cart (filter method)
      return {
        ...state, 
        cartItems: state.cartItems.filter(item => item._id !== action.payload)
      }
  }
  // otherwise, return the current state unchanged 
  default: 
  return state

  }
};

export default CartReducer;