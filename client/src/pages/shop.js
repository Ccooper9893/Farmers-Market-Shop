import ProductCard from "../components/productCard";
import { useQuery } from '@apollo/client';
// Import useEffect from React.
import React, { useState } from 'react';
//queries
import {GET_PRODUCTS} from '../utils/queries';
function Shop() {
  const { loading, data } = useQuery(GET_PRODUCTS);
  const products = data?.getProducts || [];
//  console.log (products)
// const [categoryData, setCategoryData] = useState(products)
// console.log ({categoryData})
  return (
    <>
    <div className="bg-emerald-900 bg-opacity-20 rounded-lg shadow bg-base-200 drawer  h-screen">
     <input id="my-drawer-2" type="checkbox" className="drawer-toggle"></input>
       <div className="flex flex-col items-center justify-center drawer-content">
   {loading ? null : (      <div className="text-xs text-center ">
         {data.getProducts.map((product)=> (
          <ProductCard props={product}/>
         ))}
         </div> ) }
   </div>
   <div class="drawer-side p-2.5 ">
    <label for="my-drawer-2" class="drawer-overlay"></label>
        {/* TO DO: map through all categories */}
      {/* {products.map((products => (
            <ul  className="menu p-8  overflow-y-auto w-60 h-80 rounded-lg text-slate-300 font-bold tracking-wide">
            <li key={products._id}>
              <p>{products.category.name}</p>
            </li>
            </ul>)))}  */}
    {/* <ul className="menu p-8  overflow-y-auto w-60 h-80 rounded-lg text-slate-300 font-bold tracking-wide">
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
    </ul> */}
  </div>
</div>
    </>
  );
}
export default Shop;
