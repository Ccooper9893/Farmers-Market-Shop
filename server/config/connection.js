const mongoose = require('mongoose');
require('dotenv').config();

<<<<<<< HEAD

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/farmersmarket', {
>>>>>>> 0371c72b13bd178fd6ca74145720d0a421bde358
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;