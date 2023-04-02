//creates a new context object using the createContext function from React
//the CartContext constant is assigned to the result of calling createContext() with no arguments, which initializes a new context object
//the context object returned by createContext() includes two components that are used to share data with components nested within them: 
        //consumer component
        //provider component - responsible for passing data to the Consumer components

import { createContext } from "react";

//the CartContext object can isused to wrap components that need access to shared cart data. the components wrapped by the CartContext.Provider component can then access the cartItems, addToCart, and removeItem props passed as values to the Provider component.
        
const CartContext = createContext();


export default CartContext;