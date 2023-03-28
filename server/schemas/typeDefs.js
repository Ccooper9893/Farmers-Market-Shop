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
        products: [Product]!
        total: Float!
        quantity: Int!
        merchant: User!
    }

    type Purchase {
        _id: ID!
        products: [Product]!
        total: Float!
        date: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        ## Get current authenticated user and their purchses
        me: User!

        ## Get all merchants and their products 
        merchants: [User]
    }

    type Mutation {
        ## Create new user and sign a token
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;