const { AuthenticationError } = require('apollo-server-express');
const { Market, Product, User, Purchase } = require('../models');
const { signToken } = require('../utils/jwt-auth');

const resolvers = {

    Query: {
        //Get current user account and purchases
        me: async (_, __, context) => {

            if (context.user) {
                return await User.findById(context.user._id).populate({ path: 'products', select: '-__v' });
            };

            throw new AuthenticationError('You must be logged in to view content!');
        },
        //Get all merchant accounts and their products
        getMerchants: async (_, __) => {
            return await User.find({ merchant: true }).populate({ path: 'products', select: '-__v' });
        },

        getProducts: async (_, __) => {
            return await Product.find().populate({ path: 'merchant', select: '-__v' });

        },

        getCategory: async (_, { category }) => {
            //Make sure category being passed is either "Vegetable", "Fruit", "Meat", "Bread", "Art", or "Livestock",
            return await Product.find({ category: category }).populate({ path: 'merchant', select: '-__v' });
        },

        getPurchases: async (_, __, context) => {
            if (!context.user) {
                throw new AuthenticationError('You must be logged in to view purchases!');
            }
            return await User.findOne({ username: 'customer' }).populate({ path: 'products', select: '-__v' });
            //Uncomment when we have front end set up and comment this ^^
            // return await User.findOne({_id: context.user._id}).populate({ path: 'products', select: '-__v' });
        },
    },

    Mutation: {
        //Create user and sign token
        addUser: async (_, args,) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        loginUser: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials. Please enter a valid username and password');
            }
            const validatePW = await user.isCorrectPassword(password);
            if (!validatePW) {
                throw new AuthenticationError('Incorrect credentials. Please enter a valid username and password');
            }

            const token = signToken(user);

            return { token, user };
        },
        addProduct: async (_, args, context) => {
            
            if (!context.user) {
                throw new AuthenticationError('You must be logged in to use this feature');
            }

            args.merchant = context.user._id;

            const newProduct = await Product.create(args);
            
            await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { products: newProduct } },
                { new: true },
            ).populate('products');
            
            return newProduct;

        },
        addPurchase: async (_, { products }, context) => {

            if (context.user) {
                const purchase = await Purchase.create(products);

                await User.findByIdAndUpdate(context.user._id, { $push: { purchases: purchase } });

                return purchase;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateStock: async (_, { stock, id }, context) => {
            if(context.user) {
                return await Product.findByIdAndUpdate(id, {stock: stock}, { new: true, runValidators: true });
            }

            throw new AuthenticationError('Not logged in');
        },

    }
};

module.exports = resolvers;