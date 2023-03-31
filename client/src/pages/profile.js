import React, { useState } from "react";
import NewProduct from "../components/Profile/NewProduct";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import ProductList from "../components/Profile/ProductList";
import Auth from "../utils/jwt-auth";

function Profile() {
  if(!Auth.loggedIn()) {
    window.location.replace('/login');
  };
  const { loading, data } = useQuery(GET_ME);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-8 text-center">
          <div className="col-span-8 lg:col-span-3">
            <div className="flex flex-col p-8 m-3 bg-orange-200 py-4">
              <h2 className="text-3xl font-bold underline" >Account</h2>
              <ul>
                <li>Username: {data.me.username}</li>
                <li>email: {data.me.email}</li>
                {!data.me.merchant ? null : (
                  <>
                    <li>Phone: {data.me.phone_number}</li>
                    <li className="font-bold text-2xl">{data.me.business_name}</li>
                    <li>{data.me.business_description}</li>
                  </>
                )}
                <li></li>
              </ul>
              <div className="flex justify-center py-4 m-3">
                <img src={data.me.image} alt={data.me.business_name}></img>
              </div>
            </div>

          </div>
          <div className="col-span-8 lg:col-span-5">
            <div className="flex flex-col justify-center m-3 bg-orange-100 py-4">
              <h2 className="text-3xl font-bold pb-5 underline" >My Purchases</h2>
              {data.me.purchases.length ? null : (
                <p>You have made no purchases</p>
              )}
            </div>
            {!data.me.merchant ? null : (
              <div className="flex flex-col justify-center m-3 bg-orange-100 py-4">
                <h2 className="text-3xl font-bold pb-5 underline" >My Products</h2>
                <NewProduct />
                {data.me.products.length ? (
                  <div className="flex flex-row flex-wrap">
                    {data.me.products.map((props) => (
                      <ProductList props={props} />
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