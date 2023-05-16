import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/farmerhouseWhiteCropped.png";
import { useStoreContext } from "../../utils/GlobalState";
import Auth from "../../utils/jwt-auth";

function Navbar({ children }) {
    const [state] = useStoreContext();
    const loggedIn = Auth.loggedIn();
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar fixed z-50 py-4 bg-green-900">
                    <div className="navbar-start">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current ml-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="white" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="navbar-center">
                        <Link to="/"><img src={logo} className="w-48 lg:w-64" alt="Farmer's Market brand"></img></Link>
                    </div>
                    <div className="navbar-end">
                        <label htmlFor="my-modal-3" className="btn btn-ghost btn-circle mr-4">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{state.cart.length}</span>
                            </div>
                        </label>

                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                {state.cart.map((product) => {
                                    return (
                                        <div>
                                            <h4><span>{product.quantity} X </span>{product.getProduct.name}</h4>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                <div className="mt-20 lg:mt-24">
                    <h6 className="w-full pt-4 pb-2 text-center text-md prataFont bg-stone-800">Our Farmer's Market is open Monday through Friday from 11AM to 5PM</h6>

                    {children}
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-40 lg:w-72 bg-base-100 text-lg text-black">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/merchants">Merchants</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {loggedIn ? <li><Link to="/account">Account</Link></li> : <li><Link to="/login">Login</Link></li>}

                </ul>
            </div>
        </div>
    )
};

export default Navbar;