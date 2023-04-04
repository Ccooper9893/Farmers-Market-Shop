import React from "react";
import { useState } from "react";
import Auth from "../utils/jwt-auth";
import { useCartContext } from "../utils/GlobalState";
import clothbg from "../Images/fabricbackground.jpg";
import darkwoodbg from "../Images/wood.jpg";
import logo from "../Images/farmerhouse.png";
import { Link } from "react-router-dom";
export default function Nav() {
  const [state] = useCartContext();
  const [navActive, setIsNavActive] = useState(false);
  const handleClick = (event) => {
    setIsNavActive((current) => !current);
  };
  const logout = (event) => {
    Auth.logout();
  };
  // calculate total price of products in the cart
  const [{ cart }] = useCartContext();
  const total = cart.reduce((acc, product) => acc + product.price, 0);
  /// checks JWT Auth state for if the user is logged in //
  const loggedIn = Auth.loggedIn();
  return (
    <div className="w-full flex flex-col">
      <div>
        {/* Header */}
        <div
          className=" flex items-center justify-center text-black font-bold text-2xl"
          style={{
            backgroundImage: `url(${clothbg})`,
            backgroundSize: "20rem",
            backgroundRepeat: "repeat",
          }}
        >
          <img className="items-center" src={logo} alt="Logo" />
        </div>
        {/* flex box container */}
        <div
          className=" flex space-x-10  items-center"
          style={{
            backgroundImage: `url(${clothbg})`,
            backgroundSize: "20rem",
            backgroundRepeat: "repeat",
          }}
        >
          {/* mobile menu */}
          <div className="md:hidden" onClick={handleClick}>
            <button className="mobile-menu-button ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            {/* code to hide this mobile menu then only show when mobile nave state is true */}
            <div className={navActive ? "text-black font-bold" : " hidden"}>
              <ul className="md:hidden">
                <li className="block py-2 text-sm">
                <Link to="/">Home
                </Link>
                </li>
                <li className="block py-2 text-sm">
                <Link to="/shop">Shop
                </Link>
                </li>
                <li className="block py-2 text-sm">
                <Link to="/merchants">Meet our Merchants
                </Link>
                </li>
                <li  className={loggedIn ? "hidden" : " block py-2 text-sm"}>
                <Link to="/login">Login/Register
                </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* hide the non mobile navigation items when the side of the screen is md */}
          <div className="regular-menu  text-black font-bold grow flex">
            <ul className=" items-center space-x-10 hidden md:flex ">
                <li className="block py-2 text-sm">
                <Link to="/">Home
                </Link>
                </li>
                <li className="block py-2 text-sm">
                <Link to="/shop">Shop
                </Link>
                </li>
                <li className="block py-2 text-sm">
                <Link to="/merchants">Meet our Merchants
                </Link>
                </li>
                <li  className={loggedIn ? "hidden" : " block py-2 text-sm"}>
                <Link to="/login">Login/Register
                </Link>
                </li>
            </ul>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost ">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {/* shopping cart items number */}
                  <span className="badge badge-sm indicator-item">
                    {state.cart.length}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                style={{
                  backgroundImage: `url(${darkwoodbg})`,
                  backgroundSize: "18rem",
                  backgroundRepeat: "repeat",
                }}
                className="card card-compact border border-black dropdown-content w-40"
              >
                {/* shopping cart card and details */}
                <div className="card-body ">
                  <span className=" text-black font-bold text-center rounded-md ">
                    {state.cart.length} items
                  </span>
                  <span className=" text-black font-bold text-center rounded-md ">
                    ${total.toFixed(2)}
                  </span>
                  <div className="card-actions">
                  <div className="btn font-bold text-center btn-block text-black bg-white hover:bg-white">
                    <Link to="/checkout">View Cart
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/* this is the My Account in the far right  */}
            <div className="dropdown dropdown-content  mr-2">
              <label tabIndex={0} className="btn btn-ghost">
                <div className="w-10 mr-3 text-black font-bold">
                  My Account
                  {/* <img src="/images/SampleProfile.PNG" alt="sample" /> */}
                </div>
              </label>
              <div
                tabIndex={0}
                className="w-25  border border-black menu menu-compact dropdown-content mt-1 p-2 rounded-xl mr-10"
                style={{
                  backgroundImage: `url(${darkwoodbg})`,
                  backgroundSize: "18rem",
                  backgroundRepeat: "repeat",
                }}
              >
                <div
                  className={loggedIn ? " w-20 text-center rounded-t-lg  text-black font-bold": "hidden" } >
                  <button className="">
                    <Link to="/profile"> Profile</Link>
                  </button>
                </div>
                <button
                  className={
                    loggedIn ? "hidden" : " text-black font-bold rounded-lg "
                  }
                >
                  <Link to="/login"> Login </Link>
                </button>
                <button
                  onClick={logout}
                  className={
                    loggedIn ? " text-black font-bold rounded-b-lg  " : "hidden"
                  }
                >
                  <Link to="/login"> Logout </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}