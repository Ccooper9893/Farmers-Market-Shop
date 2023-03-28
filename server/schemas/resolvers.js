const { AuthenticationError } = require('apollo-server-express');
const { Market, Product, User, Purchase } = require('../models');
const { signToken } = require('../utils/jwt-auth');

const resolvers = {

    Query: {
        //Get current user account and purchases
        me: async (parent, args, context) => {
            if(context.user) {
                return await User.findOne({email: context.user.email}).populate('purchases');
            };

            throw new AuthenticationError('No user with that email address exists!');
        },
        //Get all merchant accounts and their products
        merchants: async (parent, args) => {
            return await User.find({merchant: true}).populate('products');
        },
    },

    Mutation: {
        //Create user and sign token
        addUser: async (parent, args) => {
            const newUser = await User.create(args);
            const token = signToken(newUser);

            return { newUser, token };
        },
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials. Please enter a valid username and password');
            } 
            const validatePW = await User.isCorrectPassword(password);
            if (!validatePW) {
                throw new AuthenticationError('Incorrect credentials. Please enter a valid username and password');
            }

            const token = signToken(user);

            return {user, token }; 
    },
    addProduct: async (parent, args, context) => {
        //console.log(context)
        //if (!context.user) {
        //throw new AuthenticationError('You must be logged in to use this feature');
        //}
        const newProduct = await Product.create(args)
        await User.findOneAndUpdate({ username: 'john' }, { $addToSet: { products: newProduct }  });
        //await User.findByIdAndUpdate(context.user._id,
        //{$push: {products: newProduct}}
        //}});

        return newProduct;
    },
}};

module.exports = resolvers;