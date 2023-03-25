const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    product_description: {
        type: String,
        required: true,
    },
    category: [{
        type: String, 
        required: true,
    }],
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    // who is selling the product
    merchant: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Product = model('Product', productSchema);

module.exports = Product;

