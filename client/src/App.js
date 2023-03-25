
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/// pages to include ///
import Home from "./pages/home";
import Sample from "./pages/sample";
import Shop from "./pages/shop";
import Merchants from "./pages/merchants";
import LoginRegister from "./pages/login-register";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <div>
      <Header />
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
  );
}

export default App;
