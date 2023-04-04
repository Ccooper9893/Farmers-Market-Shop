import React from "react";
import { Link } from "react-router-dom";

//slide cards
function SlideMenu({ backgroundImg, toLink, text }) {
  return (
    <>
        <div>
          <div
            className="hero my-3 h-50 lg:w-45 bg-opacity-60 rounded-lg "
            style={{
              backgroundImage: backgroundImg,
            }}
          >
            <div className="hero-overlay bg-opacity-60 text-center  p-14 hover:bg-opacity-80">
              <Link
                className="text-slate-300 font-semibold text-l lg:text-2xl"
                to={toLink}
              >
                {text}
              </Link>
            </div>
          </div>
          </div>
    </>
  );
}

export default SlideMenu;
