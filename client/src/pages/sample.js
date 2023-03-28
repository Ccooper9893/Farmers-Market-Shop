import React from "react";
import Hero from "../components/Hero";

function Sample() {
  return (
    <>
      <Hero />
      <div className="App">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-2">
          <div className="shrink-0"></div>

          <div>
            <div className="text-xl font-medium text-black">I'm a sample page!</div>
            <a href="/">
              {" "}
              <button className="btn">Back to home</button>
            </a>
          </div>
        </div>
        <div>under card</div>
      </div>
      <div>
      </div>
    </>
  );
}

export default Sample;
