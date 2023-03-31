import React, { useState } from "react";
import NewProduct from "../components/Profile/NewProduct";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import ProductList from "../components/Profile/ProductList";
import Auth from "../utils/jwt-auth";

function Profile() {
  const [userData, setUserData] = useState(null);

  if(!Auth.loggedIn()) {
    window.location.replace('/login');
  };
  
  useQuery(GET_ME, {
    onCompleted: (data) => setUserData(data.me),
  });

  const handleDeleteProduct = (productId) => {
    // Filter out the product with the given ID
    const updatedProducts = userData.products.filter(product => product._id !== productId);
    setUserData({
      ...userData,
      products: updatedProducts,
    });
  };

  return (
    <div>
      {!userData ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-8 text-center">
          <div className="col-span-8 lg:col-span-3">
            <div className="flex flex-col p-8 m-3 bg-orange-200 py-4">
              <h2 className="text-3xl font-bold underline" >Account</h2>
              <ul>
                <li>Username: {userData.username}</li>
                <li>email: {userData.email}</li>
                {!userData.merchant ? null : (
                  <>
                    <li>Phone: {userData.phone_number}</li>
                    <li className="font-bold text-2xl">{userData.business_name}</li>
                    <li>{userData.business_description}</li>
                  </>
                )}
                <li></li>
              </ul>
              <div className="flex justify-center py-4 m-3">
                <img src={userData.image} alt={userData.business_name}></img>
              </div>
            </div>

          </div>
          <div className="col-span-8 lg:col-span-5">
            <div className="flex flex-col justify-center m-3 bg-orange-100 py-4">
              <h2 className="text-3xl font-bold pb-5 underline" >My Purchases</h2>
              {userData.purchases.length ? null : (
                <p>You have made no purchases</p>
              )}
            </div>
            {!userData.merchant ? null : (
              <div className="flex flex-col justify-center m-3 bg-orange-100 py-4">
                <h2 className="text-3xl font-bold pb-5 underline" >My Products</h2>
                <NewProduct />
                {userData.products.length ? (
                  <div className="flex flex-row flex-wrap">
                    {userData.products.map((product) => (
                      <ProductList key={product._id} product={product} onDeleteProduct={handleDeleteProduct}/>
                    ))}
                  </div>
                ) :
                  (
                    <p>You have no products</p>
                  )}

              </div>
            )}
          </div>
        </div>

      )}
    </div>
  )

}

export default Profile;