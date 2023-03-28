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
        {
            name: 'Homemade ice cream',
            product_description: 'We make vanilla, chocolate, strawberry, and pecan! These products are provided by Daisy, our dairy cow.',
            category: 'Dairy',
            stock: 40,
            price: 9.95
        },
        {
            name: 'Milk',
            product_description: 'Old fashioned bottled milk. sold in 6 packs. Bring back the bottle for a discount!',
            category: 'Dairy',
            stock: 20,
            price: 6.46
        },
        {
            name: 'Chickens',
            product_description: 'Yes, we have our own chickens and we sell them too! We only have hens for sale.',
            category: 'Livestock',
            stock: 20,
            price: 22.93
        },
        {
            name: 'Goats',
            product_description: 'We are proud to offer our handsome and healthy billy goats for sale. Our goats are well-bred and well-cared-for, and have been raised on a diet of high-quality hay and grains.',
            category: 'Livestock',
            stock: 8,
            price: 380.35
        },
        {
            name: 'Paintings',
            product_description: 'Variety of landscape paintings that feature the beauties of our town.',
            category: 'Art',
            stock: 12,
            price: 150.99
        },
        {
            name: 'Carved Spoons',
            product_description: 'Beautiful hand carved wood spoons made with mahogany',
            category: 'Art',
            stock: 30,
            price: 25.99
        },
        {
            name: 'Candles',
            product_description: 'Beautiful natural light. We have many aromas to choose from!',
            category: 'Art',
            stock: 45,
            price: 13.99
        },
    ]);

    console.log('Products seeded!');

    await Purchase.deleteMany();
    const purchases = await Purchase.create([
        {
            date: Date.now(),
            products: [products[3]._id, products[6]._id],
        },
    ]);

    const productIds = products.map(product => product._id);

    await User.deleteMany();

    const users = await User.create([
        {
            username: 'marketfresh',
            password: 'password123',
            email: 'marketfresh@email.com',
            purchases: [],
            merchant: true,
            business_name: 'Market fresh',
            business_description: 'Fresh Market is a vibrant farm market that offers a wide variety of fresh, locally-grown produce and artisanal products. Our market showcases the best of what local farmers have to offer, including a colorful selection of seasonal fruits and vegetables, as well as honey, eggs, dairy products, and other locally-made goods. We prioritize sustainability and ethical farming practices, and are proud to support small-scale agriculture. Our friendly and knowledgeable staff are always on hand to provide expert advice and assistance, and we strive to create a warm and welcoming atmosphere for all of our customers. Whether you\'re a home cook, a foodie, or just someone who loves fresh, healthy food, Fresh Market is the perfect place to discover the best of local agriculture.',
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