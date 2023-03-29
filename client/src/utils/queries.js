import { gql } from '@apollo/client';

export const QUERY_ALL_PRODUCTS = gql`
query GetProducts {
  getProducts {
    category
    merchant {
      business_name
    }
    name
    price
    product_description
    stock
  }
}
  
`;