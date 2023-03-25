const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        // TODO: add validation
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email address'],
    },
    purchases: [{
        type: Schema.Types.ObjectId,
        ref: 'Purchase',
    }],
    admin: {
        type: Boolean,
        default: false,
    },
    merchant: {
        type: Boolean, 
        default: false,
    },
    business_name: {
        type: String,
        required: function() {
            return this.merchant === true;
        }
    },
    business_description: {
        type: String,
        required: function() {
            return this.merchant === true;
        }
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
    image: {
        type: String,
        required: function() {
            return this.merchant === true;
        }
    },
    phone_number: {
        type: String,
        required: function() {
            return this.merchant === true;
        }
    },
    address: {
        type: String,
        required: function() {
            return this.merchant === true;
        }
    },
});

const User = model('User', userSchema);

module.exports = User;