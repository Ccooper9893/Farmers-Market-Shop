const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/farmersMarketDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;