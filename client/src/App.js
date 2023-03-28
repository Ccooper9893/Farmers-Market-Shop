
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/// pages to include ///
import Home from "./pages/home";
import Shop from "./pages/shop";
import Merchants from "./pages/merchants";
import LoginRegister from "./pages/login";
import Register from "./pages/register";
import Footer from "./components/Footer";
import Nav from "./components/Nav"; 


function App() {
  return (
    <>
      <div className="bg-teal-900 min-h-screen">
      <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      <Footer />
      </div>



          
    </>
  );
}

export default App;
