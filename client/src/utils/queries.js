import { gql } from '@apollo/client';


export const GET_ME = gql`
query Query {
    me {
      _id
      email
      phone_number
      merchant
      business_name
      business_description
      address
      image
      products {
        _id
        name
        product_description
        category
        price
        stock
        image
        merchant {
            _id
            business_name
        }
      }
      purchases {
        _id
        date
        products {
          name
          price
        }
      }
    }
  }
`;

export const GET_MERCHANTS = gql`
    query Query {
        getMerchants {
            _id
            business_description
            business_name
            image
            phone_number
            products {
                _id
                category
                name
                price
                stock
                product_description
            }
        }
    }
`;

export const GET_MERCHANT = gql`
    query Query($getMerchantId: ID!) {
        getMerchant(id: $getMerchantId) {
        _id
        address
        business_description
        email
        business_name
        image
        merchant
        phone_number
        products {
            _id
            category
            name
            price
            product_description
            merchant {
            business_name
            }
            stock
            image
        }
        }
    }
`

export const GET_PRODUCTS = gql`
    query GetProducts {
        getProducts {
            _id
            name
            category 
            product_description
            price
            stock
            image
            merchant {
                _id
                business_name
            }
        }
    }
`;

export const GET_PRODUCT = gql`
    query GetProducts($getProductId: ID!) {
        getProduct(id: $getProductId) {
        _id
        image
        name
        price
        merchant {
            _id
            business_name
        }
        product_description
        stock
        category
        }
    }
  `;

export const GET_CATEGORY = gql`
    query GetCategory($category: String!) {
        getCategory(category: $category) {
            _id
            name
            category 
            product_description
            price
            stock
            image
            merchant {
                _id
                business_name
            }
        }
    }
`;

export const GET_PURCHASES = gql`
    query GetPurchases {
        getPurchases {
            _id
            date
            products {
                _id
                category
                name
                price
                product_description
                merchant {
                business_name
                }
            }
        }
    }

`;