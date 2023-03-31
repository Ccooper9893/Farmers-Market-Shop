import { useReducer } from "react";
import {
    UPDATE_PRODUCT_RENDER ,
 
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_RENDER :
      return {
        ...state,
        products: [...action.products],
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}
