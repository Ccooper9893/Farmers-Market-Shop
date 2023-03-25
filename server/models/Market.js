const { Schema, model } = require('mongoose');

const marketSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
});

const Market = model('Market', marketSchema);

module.exports = Market;