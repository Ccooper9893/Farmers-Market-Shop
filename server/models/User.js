const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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

// hook checks if the password has been modified before hashing it and updating password on user object
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};



const User = model('User', userSchema);

module.exports = User;