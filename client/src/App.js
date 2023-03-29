
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';

/// pages to include ///
import Home from "./pages/home";
import Sample from "./pages/sample";
import Shop from "./pages/shop";
import Merchants from "./pages/merchants";
import LoginRegister from "./pages/login-register";
import Footer from "./components/Footer";
import Nav from "./components/Nav"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
    <>
      <div className="bg-teal-900 min-h-screen">
      <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/sample" element={<Sample />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/login-register" element={<LoginRegister />} />
          </Routes>
        </BrowserRouter>
      <Footer />
      </div>



          
    </>
    </ApolloProvider>
  );
}

export default App;
