const { AuthenticationError } = require('apollo-server-express');
const { Market, Product, User, Purchase } = require('../models');
const { signToken } = require('../utils/jwt-auth');

const resolvers = {
    Query: {
        me: async (parent, arts, context) => {
            if(context.user) {
                return await User.findOne({email: context.user.email}).populate('purchases');
            };

            throw new AuthenticationError('No user with that email address exists!');
        },
    },

    Mutation: {

    },
};

