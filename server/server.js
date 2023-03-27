const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');


const multer = require('multer');
const uploadFile = require('./utils/gc-upload');

//Configuring multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const AuthMiddleware = require('./utils/jwt-auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: AuthMiddleware
});

//Allow front-end to pass nested objects/arrays in requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//We will need to add NODE_ENV="production" in .env file when deploying.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

//Upload images using this route before calling query to create product, use fetch()
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const imageUrl = await uploadFile(req.file);
    res.json({ imageUrl });
  } catch (error) {
    res.json({message: 'Error in uploading image.'});
  };
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({app});
};

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`User GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

startApolloServer(typeDefs, resolvers);