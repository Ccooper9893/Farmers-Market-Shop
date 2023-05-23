import { useReducer } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
      case REMOVE_FROM_CART:
        let newState = state.cart.filter((product) => {
          return product.getProduct._id !== action._id;
        });
        return {
          ...state,
          cart: newState,
        };
        case CLEAR_CART:
          return {
              ...state,
              cart: [],
          };
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}