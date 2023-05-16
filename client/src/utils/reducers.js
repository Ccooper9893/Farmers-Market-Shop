import { useReducer } from "react";
import { ADD_TO_CART } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}