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
            const newUser = await User.create(...args);
            const token = signToken(newUser);

            return { newUser, token };
        },
    },
};

