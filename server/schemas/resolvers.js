const { AuthenticationError } = require('apollo-server-express');
const { Market, Product, User, Purchase } = require('../models');
const { signToken } = require('../utils/jwt-auth');

const resolvers = {

    Query: {
        //Get current user account and purchases
        me: async (parent, args, context) => {
            if(context.user) {
                return await User.findOne({email: context.user.email}).populate('purchases').populate('products');
            };

            throw new AuthenticationError('You must be logged in to view content!');
        },
        //Get all merchant accounts and their products
        merchants: async (parent, args) => {
            return await User.find({merchant: true}).populate('products');
        },
    },

    Mutation: {
        //Create user and sign token
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            console.log(user);
            return { token, user };
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

            return { token, user }; 
        },
        addProduct: async (parent, args, context) => {
            //console.log(context)

            //Once we build auth front-end and use query_me uncomment this code
            //-------------------------------
            // if (!context.user) {
            // throw new AuthenticationError('You must be logged in to use this feature');
            // }

            // const updatedUser = await User.findOneAndUpdate(
            //     { _id: context.user._id },
            //     { $addToSet: {products: newProduct} },
            //     { new: true },
            // ).populate('products');
            // return updatedUser;
            //-------------------------------

            const newProduct = await Product.create(args)
            await User.findOneAndUpdate({ username: 'john' }, { $addToSet: { products: newProduct }  });

            return newProduct;
        },

    }
};

module.exports = resolvers;