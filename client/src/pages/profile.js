import React, { useState } from "react";
import NewProduct from "../components/Profile/NewProduct";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

function Profile() {
  const { loading, data } = useQuery(GET_ME);

  return (
          <NewProduct />
      )

}

export default Profile;