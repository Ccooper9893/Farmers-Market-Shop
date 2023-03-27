const { Schema, model } = require('mongoose');

const purchasesSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    total_price: {
        type: Number,
        required: true,
        min: 0,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }],
    category: [{
        type: String,
        required: true,
        // enum - restrict to a specific set of options
        // create category dropdown menu in front end?
        enum: ['Fruit', 'Vegetable', 'Meat', 'Dairy', 'Art', 'Beer/Wine', 'Other']
        
    }],
    image: {
        type: String,
        required: true,
    },
});

const Purchases = model('Purchases', purchasesSchema);

module.exports = Purchases; 