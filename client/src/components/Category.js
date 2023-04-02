import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORY } from '../utils/queries';
import { GET_PRODUCTS } from '../utils/queries';

function CategoryMenu() {

//   const { loading, data } = useQuery(GET_CATEGORY);
//   const products = data?.getCategory || [];
//  console.log (products)
// const [categoryData, setCategoryData] = useState(products)


//     const { loading, data } = useQuery(GET_CATEGORY);
//   const cat = data?.getCategory || [];
//  console.log (cat)
// const [categoryData, setCategoryData] = useState(products)



  return (
    <div>
      <h2>Choose a Category:</h2>
      {/* {cat.map((item) => (
      
        <p>{item.category.name}</p>
        

      ))} */}
    </div>
  );
}

export default CategoryMenu;
