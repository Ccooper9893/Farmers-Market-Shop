import ProductCard from "../components/productCard";
import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_PRODUCTS } from '../utils/queries';

function Shop() {
  const { loading, data } = useQuery(GET_PRODUCTS);
  const products = data?.getProducts || [];

  return (
    
      <div className="bg-emerald-900 bg-opacity-20 rounded-lg shadow bg-base-200 drawer h-screen">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center drawer-content">
          <div className="text-xs text-center">
            <ProductCard products={products} />
          </div>
        </div>
        <div class="drawer-side p-2.5">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          {products.map((product) => (
            <ul key={product._id} className="menu p-8 overflow-y-auto w-60 h-80 rounded-lg text-slate-300 font-bold tracking-wide">
              <li>
                <p>{product.category.name}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    
  );
}
export default Shop;
