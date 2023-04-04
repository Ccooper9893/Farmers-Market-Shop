import React, { useState } from "react";

import "./App.css";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import darkwoodbg from "./Images/darkwood.png";

/// pages to include ///
import Home from "./pages/home";
import Shop from "./pages/shop";
import Merchants from "./pages/merchants";
import Profile from "./pages/profile";
import LoginRegister from "./pages/login";
import Register from "./pages/register";
import Footer from "./components/Footer";
import Checkout from "./pages/checkout";
import Nav from "./components/Nav";
import { CartProvider } from "./utils/GlobalState";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      
   
            <div
              className="h-screen"
              style={{
                backgroundImage: `url(${darkwoodbg})`,
                backgroundSize: "25 rem",
                backgroundRepeat: "repeat",
              }}
            >
              <CartProvider>
              <Nav />

              <Routes>
          
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/merchants" element={<Merchants />} />
                <Route path="/login" element={<LoginRegister />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>

              <Footer />
              </CartProvider>
            </div>
   
 
      </Router>
    </ApolloProvider>
  );
}

export default App;
