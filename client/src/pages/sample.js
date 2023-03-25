import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Sample() {
  return (
    <>
      <Header />
      <Hero />
      <div className="App">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0"></div>

          <div>
            <div class="text-xl font-medium text-black">I'm a sample page!</div>
            <a href="/">
              {" "}
              <button className="btn">Back to home</button>
            </a>
          </div>
        </div>
        <div>under card</div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Sample;
