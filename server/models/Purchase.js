const { Schema, model } = require('mongoose');

const purchaseSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        }
    ],
});

const Purchase = model('Purchase', purchaseSchema);

module.exports = Purchase; 