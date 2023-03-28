const db = require('./connection');
const { User, Product, Purchase } = require('../models');

db.once('open', async () => {

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Ribeye Steaks',
            product_description: '12oz Marbled, clean cut, and fresh',
            category: 'Meat',
            stock: 20,
            price: 12.56
        },
        {
            name: 'Potatoes',
            product_description: 'Twice rinsed russet potatoes comes in 5lb bags',
            category: 'Vegetable',
            stock: 20,
            price: 2.67
        },
        {
            name: 'Carrots',
            product_description: 'Comes in 2lb bags, rinsed, fresh',
            category: 'Vegetable',
            stock: 100,
            price: 3.58
        },
        {
            name: 'Granny Smith Apples',
            product_description: 'Freshly picked and washed comes in 2lb fabric bags',
            category: 'Fruit',
            stock: 30,
            price: 7.34
        },
        {
            name: 'Whole Turkey',
            product_description: 'Perfect for Holidays! Average 10lbs',
            category: 'Meat',
            stock: 15,
            price: 18.59
        },
        {
            name: 'Ribeye Steaks 12oz',
            product_description: 'Marbled, clean cut, and fresh',
            category: 'Meat',
            stock: 20,
            price: 12.56
        },
        {
            name: 'Strawberries',
            product_description: '1lb bags of 100% natural and fresh strawberries',
            category: 'Fruit',
            stock: 40,
            price: 4.23
        },
        {
            name: 'Sourdough Loaves',
            product_description: 'Baked fresh every morning',
            category: 'Bread',
            stock: 20,
            price: 8.67
        },
        {
            name: 'Raisan Bread',
            product_description: 'Multigrain raisan bread. Comes in a loaf.',
            category: 'Bread',
            stock: 15,
            price: 8.25
        },
        {
            name: 'Banana Bread',
            product_description: 'Made with flour and bananas. 10 bananas per loaf!',
            category: 'Bread',
            stock: 15,
            price: 12.00
        },
        {
            name: 'Tomatoes',
            product_description: '1 pound boxes of cherry tomatoes',
            category: 'Vegetable',
            stock: 30,
            price: 3.99
        },
        {
            name: 'Red Onions',
            product_description: '1 pound boxes of red onions',
            category: 'Vegetable',
            stock: 30,
            price: 3.99
        },
        {
            name: 'Broccoli',
            product_description: 'Broccoli by the pound, bring your own bag!',
            category: 'Vegetable',
            stock: 100,
            price: 2.99
        },
        {
            name: 'Pumpkin',
            product_description: 'Make some pumpkin pie! Prepare for halloween. We are pumpkin kings. Sizes come from small to large.',
            category: 'Vegetable',
            stock: 25,
            price: 4.50
        },


    ])

    console.log('Products seeded!');


    await Purchase.deleteMany();
    const purchases = await Purchase.create([
        {
            date: Date.now(),
            products:[products[3]._id, products[6]._id],
        },
    ]);

    const productIds = products.map(product => product._id);

    await User.deleteMany();

    const users = await User.create([
        {
            username: 'daleberryfarms',
            password: 'password123',
            email: 'dale@email.com',
            purchases: [],
            admin: true,
            merchant: true,
            business_name: 'Dales Farm',
            business_description: 'Dales Farm is a diverse farm that specializes in producing a variety of fresh and high-quality products, including vegetables, meat, fruits, and baked goods. Our farm is dedicated to sustainable and organic farming practices, ensuring that our customers receive the healthiest and tastiest products possible. We take great pride in the care and attention we give to our crops and animals, and are committed to providing our customers with locally sourced and delicious products.',
            products: productIds,
            image: 'https://media.istockphoto.com/id/1083286598/photo/keeping-a-close-watch-on-his-crops.jpg?s=612x612&w=0&k=20&c=V6RjPh6icgkxduEig163IMtevL39SxDJJdvJkGmR2NE=',
            phone_number: '75609091112',
            address: '45 Farmview Ln, State, Country, zip',
        },
        {
            username: 'testuser',
            password: 'password123',
            email: 'test@email.com',
            purchases: [purchases[0]._id],
        },
    ]);

    console.log('Users seeded!');

    const user = await User.findOne({ username: 'daleberryfarms' });

    await Product.updateMany({}, { merchant: user._id });

    console.log('Merchant updated for all products');
    console.log('Purchases created for test user.');    

    process.exit();
});