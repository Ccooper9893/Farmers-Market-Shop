import React from "react";
import homePage from "../Images/Home-page.png";



function Hero() {
  return (
    <>
      <div
        className="hero h-80 sm:h-96 w-full"
        style={{
          backgroundImage: `url(${homePage})` ,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Hello,</h1>
            <p className="mb-5 text-2xl font-bold">Welcome to online farmers market</p>
          </div>
        </div>
      </div>
     


    </>
  );
}

export default Hero;
