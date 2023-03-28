const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        admin: Boolean
        merchant: Boolean
        business_name: String
        business_description: String
        products: [Product]
        image: String
        phone_number: String
        purchases: [Purchase]
    }

    type Product {
        _id: ID!
        name: String!
        product_description: String!
        category: String!
        stock: Int!
        price: Int!
        ##merchant: User!
    }

    type Purchase {
        _id: ID!
        products: [Product]!
        price: Int!
        date: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        ## Get current authenticated user and their purchases
        me: User! 
        ## TODO: Get all products
        getProducts: [Product]
        ## Get all merchants and their products 
        merchants: [User]
    }

    type Mutation {
        ## Create new user and sign a token
        ## Check if user is merchant
        addUser(username: String!, email: String!, password: String!, merchant: Boolean, business_name: String, business_description: String, phone_number: String,image: String, address: String): Auth
        ## Login
        loginUser(email: String!, password: String!): Auth
        ## Add Product
        addProduct(name: String, product_description: String, category: String, stock: Int, price: Int): Product
    }
`;

module.exports = typeDefs;