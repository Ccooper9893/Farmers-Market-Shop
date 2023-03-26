import React from "react";
import homePage from "../Images/Home-page.png";



function Hero() {
  return (
    <>
      <div
        className="hero h-96 w-full"
        style={{
          backgroundImage: `url(${homePage})` , height: 500,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
            <p className="mb-5">I am a hero image in the hero component.</p>
          </div>
        </div>
      </div>
     


    </>
  );
}

export default Hero;
