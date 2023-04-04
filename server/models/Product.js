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
    category: {
        type: String, 
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: 'https://static.thenounproject.com/png/3674270-200.png',
    },
    // who is selling the product
    merchant: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Product = model('Product', productSchema);

module.exports = Product;

