const { AuthenticationError } = require('apollo-server-express');
const { Market, Product, User, Purchase } = require('../models');
const { signToken } = require('../utils/jwt-auth');

const resolvers = {

    Query: {
        //Get current user account and purchases
        me: async (parent, args, context) => {
            if (context.user) {
                return await User.findOne({ email: context.user.email }).populate('purchases').populate('products');
            };

            throw new AuthenticationError('You must be logged in to view content!');
        },
        //Get all merchant accounts and their products
        getMerchants: async (parent, args) => {
            return await User.find({ merchant: true }).populate('products');
        },

        getProducts: async (parent, args) => {
            const product = await Product.find().populate({ path: 'merchant', select: '-__v' });
        },

        getCategory: async (parent, { category }) => {
            //Make sure category being passed is either "Vegetable", "Fruit", "Meat", "Bread", "Art", or "Livestock",
            return await Product.find({ category: category }).populate({ path: 'merchant', select: '-__v' });
        }
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
            await User.findOneAndUpdate({ username: 'daleberryfarms' }, { $addToSet: { products: newProduct } });

            return newProduct;
        },
        addPurchase: async (parent, { products }, context) => {

            if (context.user) {
              const purchase = new Purchase({ products });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { ppurchases: purchase } });
      
              return purchase;
            }
      
            throw new AuthenticationError('Not logged in');
        }

    }
};

module.exports = resolvers;