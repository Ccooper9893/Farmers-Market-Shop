const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const AuthMiddleware = require('./utils/jwt-auth');
// const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

//Allow front-end to pass nested objects/arrays in requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: AuthMiddleware
// });

//We will need to add NODE_ENV="production" in .env file when deploying.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
});