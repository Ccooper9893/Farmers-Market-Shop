const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        email: String
        merchant: Boolean
        business_name: String
        business_description: String
        address: String
        products: [Product]
        image: String
        phone_number: String
        purchases: [Purchase]
    }

    type Product {
        _id: ID!
        name: String
        product_description: String
        category: String
        stock: Int
        price: Float
        image: String
        merchant: User
    }

    type Purchase {
        _id: ID!
        products: [Product]
        purchaseDate: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User 
        getPurchases: [Purchase]
        getProducts: [Product]
        getCategory(category: String!): [Product]
        getMerchants: [User]
        getProduct(id: ID!): Product
        getMerchant(id: ID!): User

    }

    type Mutation {
        addUser(email: String!, password: String!, merchant: Boolean, business_name: String, business_description: String, phone_number: String, image: String, address: String): Auth
        loginUser(email: String!, password: String!): Auth
        addProduct(name: String, product_description: String, category: String, stock: Int, price: Float, image: String): Product
        removeProduct(id: ID!): Product
        addPurchase(products: [ID]!) : Purchase
        updateStock(stock: Int, id: ID!) : Product
        updateProduct(price: Float, stock: Int, id: ID!) : Product
        deleteProduct(id: ID!) : Product
    }
`;

module.exports = typeDefs;