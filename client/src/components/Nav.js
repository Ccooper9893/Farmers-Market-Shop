import React from "react";
import CartContext from "./context/CartContext";
import { useContext } from "react";
import Auth from "../utils/jwt-auth";
import {useState} from 'react';
import Auth from "../utils/jwt-auth";
import { useCartContext } from "../utils/GlobalState";






export default function Nav() {
 const [state, dispatch] = useCartContext();
 console.log(state);


 const [navActive, setIsNavActive] = useState(false);


 const handleClick = event => {
     setIsNavActive(current => !current);
 };


const logout = event => {
 Auth.logout();
};




// calculate total price of products in the cart
const [{ cart }] = useCartContext();
const total = cart.reduce((acc, product) => acc + product.price, 0);


/// checks JWT Auth state for if the user is logged in //
const loggedIn = Auth.loggedIn();




/// checks JWT Auth state for if the user is logged in //
const loggedIn = Auth.loggedIn();






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
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
           </svg>
   
           </button>
           <div className={navActive ? 'text-white' : 'text-white hidden'}>
             <ul className="md:hidden">
               <a className="block py-2 text-sm" href="/">Home</a>
               <a className="block py-2 text-sm" href="/shop">Shop</a>
               <a className="block py-2 text-sm" href="/merchants">Meet our Merchants</a>
               <a className={loggedIn ? 'hidden' : ' block py-2 text-sm'} href="/login">Login/Register</a>
             </ul>
             </div>
           </div>
           <div className="regular-menu  text-white grow flex">
               <ul className=" items-center space-x-10 hidden md:flex ">
                 <a href="/">Home</a>
                 <a href="/shop">Shop</a>
                 <a href="/merchants">Meet our Merchants</a>
                 <a className={loggedIn ? 'hidden' : ''} href="/login">Login/Register</a>
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
             <span className="badge badge-sm indicator-item">{state.cart.length}</span>
           </div>
         </label>
         <div tabIndex={0} className="card card-compact dropdown-content w-52 bg-base-100 shadow" >
{/* shopping cart card and details */}

            <div className="card-body ">
              <span className=" text-black font-bold text-center rounded-md ">{state.cart.length} items</span>
              <span className=" text-black font-bold text-center rounded-md " >${total.toFixed(2)}</span>
              <div className="card-actions">
                <a href="/checkout" className="btn font-bold text-center btn-block text-black bg-white hover:bg-white">View cart</a>

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
          <div tabIndex={0} className="w-25  border border-black menu menu-compact dropdown-content mt-1 p-2 rounded-xl mr-10" style={{
                  backgroundImage: `url(${darkwoodbg})`,
                  backgroundSize: '18rem',
                  backgroundRepeat: 'repeat',
                }} >
            <div className={loggedIn ? ' w-20 text-center rounded-t-lg  text-black font-bold' :'hidden' }>
            <button className=""> <a href="/profile"> Profile 
            </a></button>
            </div>
            <button className= {loggedIn ? 'hidden' : ' text-black font-bold rounded-lg '}> <a href="/login"> Login </a></button>
            <button onClick={logout} className= {loggedIn ? ' text-black font-bold rounded-b-lg  ' : 'hidden'}> <a href="/login"> Logout </a></button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>

    


);
}
