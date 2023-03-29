import ProductCard from "../components/productCard";
import { useQuery } from '@apollo/client';
// Import useEffect from React.
import React, { useState, useEffect } from 'react';
// import { useStoreContext } from '../../utils/GlobalState';
//TO DO: update auth file
// import Auth from '../utils/auth'


//TO DO: UPDATE TO AN ACTUAL QUERY
import {GET_PRODUCTS} from '../utils/queries';

function Shop() {

  // We declare a state variable that is an array called `issues` and a function to update it.
  const [product, setProduct] = useState([]);

  // useEffect(() => {
    
  // }, []);

  const { loading, data } = useQuery(GET_PRODUCTS);
  const products = data?.products || [];


  return (
    <>

    <div className="bg-emerald-900 bg-opacity-20 rounded-lg shadow bg-base-200 drawer drawer-mobile h-screen">
     <input id="my-drawer-2" type="checkbox" className="drawer-toggle"></input>
       <div className="flex flex-col items-center justify-center drawer-content">
        <label for="my-drawer-2" className="mb-4 btn btn-primary drawer-button lg:hidden">open menu</label> 
         <div className="hidden text-xs text-center lg:block">
         <ProductCard 
          product={products}
         />
         </div> 
         <div class="text-xs text-center lg:hidden">

       </div>
   </div> 
   <div class="drawer-side p-2.5 ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
        {/* TO DO: map through all categories */}
        {/* categories.map((category => (
            <ul  className="menu p-8  overflow-y-auto w-60 h-80 rounded-lg text-slate-300 font-bold tracking-wide">
            <li key={category._id}>
              <p>Dairy{category.name}</p>
            </li>  */}


    <ul className="menu p-8  overflow-y-auto w-60 h-80 rounded-lg text-slate-300 font-bold tracking-wide">
      <li>
        <p>Dairy</p>
      </li> 
      <li>
        <p>Meats</p>
      </li>
      <li>
        <p>Category 1</p>
      </li>
      <li>
        <p>Category 2</p>
      </li>
      <li>
        <p>Category 3</p>
      </li>
    </ul>
  </div>
</div>





    </>
  );
}

export default Shop;
