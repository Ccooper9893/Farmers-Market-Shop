import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation Mutation($username: String!, $email: String!, $password: String!, $merchant: Boolean, $businessName: String, $businessDescription: String, $phoneNumber: String, $image: String, $address: String) {
        addUser(username: $username, email: $email, password: $password, merchant: $merchant, business_name: $businessName, business_description: $businessDescription, phone_number: $phoneNumber, image: $image, address: $address) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_PRODUCT = gql`
    mutation Mutation($name: String, $productDescription: String, $category: String, $stock: Int, $price: Float, $image: String) {
        addProduct(name: $name, product_description: $productDescription, category: $category, stock: $stock, price: $price, image: $image) {
        _id
        name
        price
        product_description
        stock
        merchant {
            business_name
        }
        category
        image
        }
    }
`;

export const REMOVE_PRODUCT = gql`
    mutation RemoveProduct($productId: ID!) {
        removeProduct(id: $productId) {
            _id
            name
            price
            product_description
            stock
            merchant {
                business_name
            }
            category
            image
        }
    }
`;

export const ADD_PURCHASE = gql`
    mutation AddPurchase($products: [ID]!) {
        addPurchase(products: $products) {
            _id
            date
            products {
                _id
                name
                price
                category
                
            }
        }
    }
`;
export const UPDATE_STOCK = gql`
    mutation Mutation($updateStockId: ID!, $stock: Int) {
        updateStock(id: $updateStockId, stock: $stock) {
        category
        stock
        name
        }
    }
`

export const UPDATE_PRODUCT = gql`
    mutation Mutation($updateProductId: ID!, $stock: Int, $price: Float) {
        updateProduct(id: $updateProductId, stock: $stock, price: $price) {
        _id
        category
        image
        name
        price
        product_description
        stock
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation Mutation($deleteProductId: ID!) {
        deleteProduct(id: $deleteProductId) {
        _id
        category
        name
        price
        product_description
        stock
        }
    }
`;