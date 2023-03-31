import React, { useEffect } from 'react';
//import { useLazyQuery } from '@apollo/client';
//import cartItem from '../CartItem';
//import authService from '../../utils/jwt-auth';
//import { useCartContext } from '../../utils/GlobalState';

import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../utils/queries';

function Products() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.getProducts.map(product => (
        <li key={product._id}>{product.name}</li>
      ))}
    </ul>
  );
}
