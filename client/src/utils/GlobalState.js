import React, { createContext, useContext } from "react";
import { useProductReducer } from './cartReducer';

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ value = [],...props}) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };
