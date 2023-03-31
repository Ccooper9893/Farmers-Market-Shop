import React, { createContext, useContext } from "react";
import { useProductReducer } from './cartReducer';

export const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({...props}) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });

    return <CartContext.Provider value={[state, dispatch]} {...props} />;
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };
