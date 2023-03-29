import React from "react";
import {useState} from 'react';
import Auth from "../utils/jwt-auth"; 


export default function Nav() {

  const [navActive, setIsNavActive] = useState(false);

  const handleClick = event => {
      setIsNavActive(current => !current);
  };

const logout = event => {
  Auth.logout(); 
}; 





  return (
    <div className=''>
      <div >
{/* Header */}
        <div className='text-center bg-emerald-700 text-white text-2xl'>Farmers Market </div>

{/* flex box container */}
        <div className=' flex space-x-10 bg-emerald-700 items-center' >
{/* mobile menu */}
            <div className="md:hidden" onClick={handleClick}> 
            <button className="mobile-menu-button ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
     
            </button>
            <div className={navActive ? 'text-white' : 'text-white hidden'}>
              <ul className="md:hidden">
                <a className="block py-2 text-sm" href="/">Home</a>
                <a className="block py-2 text-sm" href="/shop">Shop</a>
                <a className="block py-2 text-sm" href="/merchants">Meet our Merchants</a>
                <a className="block py-2 text-sm" href="/login">Login/Register</a>
              </ul>
              </div>
            </div>
            <div className="regular-menu  text-white grow flex">
                <ul className=" items-center space-x-10 hidden md:flex ">
                  <a href="/">Home</a>
                  <a href="/shop">Shop</a>
                  <a href="/merchants">Meet our Merchants</a>
                  <a href="/login">Login/Register</a>
              </ul>
            </div>
            <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
{/* shopping cart items number */}
              <span className="badge badge-sm indicator-item">9</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow" >
{/* shopping cart card and details */}
            <div className="card-body">
              <span className="font-bold text-lg bg-green-400">8 Items</span>
              <span className="text-info bg-blue-200 ">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
{/* this is the circle in the far right  */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/SampleProfile.PNG" alt="sample" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" >
            <li className="justify-between bg-green-800"> <a href="/profile"> Profile <span className="badge">New</span></a></li>
            <li className="bg-green-500"> <a href="/">Login</a> </li>
            <li onClick={logout} className="bg-red-400"> <a href="/">Logout</a> </li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </div>

    
  );
}

// export default Nav;
