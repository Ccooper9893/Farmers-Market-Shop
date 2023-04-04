const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');


const multer = require('multer');
const uploadFile = require('./utils/gc-upload');

//Configuring multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const {authMiddleware} = require('./utils/jwt-auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

//Allow front-end to pass nested objects/arrays in requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//We will need to add NODE_ENV="production" in .env file when deploying.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

//Upload images using this route before calling query to create product, use fetch()
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imageUrl = await uploadFile(req.file);
    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(400).json(error);
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