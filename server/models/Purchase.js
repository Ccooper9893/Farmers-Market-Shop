const { Schema, model } = require('mongoose');

const purchasesSchema = new Schema({
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

const Purchases = model('Purchases', purchasesSchema);

module.exports = Purchases; 