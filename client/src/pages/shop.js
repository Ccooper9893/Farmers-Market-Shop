import ProductCard from "../components/productCard";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_PRODUCTS } from "../utils/queries";
import fabricBg from "../Images/fabricbackground.jpg";
import woodBg from "../Images/Tileable-Wood-Texture.jpg";

//render all products or only by category if category selected
function Shop() {
  const [categoryData, setCategoryData] = useState(null);
  const [productFilter, setProductFilter] = useState(null);

  useQuery(GET_PRODUCTS, {
    onCompleted: (data) => {
      setCategoryData(data.getProducts);
      setProductFilter(data.getProducts);
    },
  });

  const renderProduct = (event) => {
    const selection = event.target.id;
    // Filter out the product with the given category
    const updatedProducts = categoryData.filter(
      (product) => product.category === selection
    );
    setProductFilter(updatedProducts);
  };
  return (
    <>
      <div className="grid grid-cols-8 text-center">
        <div className="col-span-8 lg:col-span-2 bg-stone-800">
          <div className="flex flex-col p-3 mx-3 text-white py-4">
            <div className="flex flex-col">
              <h2 className="text-4xl font-iight text-white my-3 border-b pb-2">
                Categories
              </h2>

              {!categoryData ? null : (
                <ul className="menu rounded-lg font-bold tracking-wide ">
                  <li>
                    <button id="Meat" onClick={renderProduct}>
                      Meat
                    </button>
                  </li>
                  <li>
                    <button id="Dairy" onClick={renderProduct}>
                      Dairy
                    </button>
                  </li>
                  <li>
                    <button id="Livestock" onClick={renderProduct}>
                      Livestock
                    </button>
                  </li>
                  <li>
                    <button id="Fruit" onClick={renderProduct}>
                      Fruit
                    </button>
                  </li>
                  <li>
                    <button id="Vegetable" onClick={renderProduct}>
                      Vegetable
                    </button>
                  </li>
                  <li>
                    <button id="Bread" onClick={renderProduct}>
                      Bread
                    </button>
                  </li>
                  <li>
                    <button id="Art" onClick={renderProduct}>
                      Art
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div
          className="col-span-8 lg:col-span-6 h-full"
          style={{
            backgroundImage: `url(${fabricBg})`,
            backgroundSize: "28rem",
            backgroundRepeat: "repeat",
          }}
        >
          {!productFilter ? null : (
            <div>
              <h2
                className="text-4xl text-stone-800 shadow-lg h-16 tracking-wide shadow-black font-bold pt-3"
                style={{
                  backgroundImage: `url(${woodBg})`,
                  backgroundSize: "18rem",
                  backgroundRepeat: "repeat",
                }}
              >
                INVENTORY
              </h2>
              <div className="flex flex-col justify-center py-4 rounded-2xl">
                <div className="bg-emerald-900 bg-opacity-20 rounded-lg shadow bg-base-200 drawer  h-screen">
                  <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                  ></input>
                  <div className=" drawer-content">
                    <div className="flex flex-row flex-wrap justify-center text-xs text-center ">
                      {productFilter.map((product) => (
                        <ProductCard key={product._id} props={product} />
                      ))}
                    </div>
                  </div>
                  <div className="drawer-side p-2.5 ">
                    <label
                      htmlFor="my-drawer-2"
                      className="drawer-overlay"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
