import React from 'react';


function Hero() {
     return (
      <>
                <div
            className="hero h-80 w-full bg-green-400 " 
            style={{
              backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
                <p className="mb-5">
                  I am a hero image in the hero component.
                </p>
              </div>
            </div>
          </div>
      </>
    );

    }



export default Hero; 