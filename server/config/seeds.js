const db = require('./connection');
const { User, Product, Purchase } = require('../models');

db.once('open', async () => {

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Ribeye Steaks',
            product_description: '16oz Marbled, clean cut, and fresh',
            category: 'Meat',
            stock: 20,
            price: 12.56
        },
        {
            name: 'New York Strips',
            product_description: '12oz clean cut, and fresh.',
            category: 'Meat',
            stock: 20,
            price: 12.56
        },
        {
            name: 'Whole Turkey',
            product_description: 'Perfect for Holidays! Average 10lbs',
            category: 'Meat',
            stock: 15,
            price: 18.59
        },
        {
            name: 'Whole Chicken',
            product_description: 'Pasture raised and healthy whole chickens.',
            category: 'Meat',
            stock: 20,
            price: 15.78
        },
        {
            name: 'Sausages',
            product_description: 'Fresh mesquite smoked sausages.',
            category: 'Meat',
            stock: 50,
            price: 1.26
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
            name: 'Granny Smith Apples',
            product_description: 'Freshly picked and washed comes in 2lb fabric bags',
            category: 'Fruit',
            stock: 30,
            price: 7.34
        },
        {
            name: 'Strawberries',
            product_description: '1lb bags of 100% natural and fresh strawberries',
            category: 'Fruit',
            stock: 40,
            price: 4.23
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
        {
            date: Date.now(),
            products: [products[5]._id, products[1]._id],
        },
    ]);

    console.log('Purchases seeded!');

    await User.deleteMany();

    // const merchant = await User.create(
    //     {
    //         username: 'marketfresh',
    //         password: 'password123',
    //         email: 'marketfresh@email.com',
    //         purchases: [],
    //         merchant: true,
    //         business_name: 'Market fresh',
    //         business_description: 'Fresh Market is a vibrant farm market that offers a wide variety of fresh, locally-grown produce and artisanal products. Our market showcases the best of what local farmers have to offer, including a colorful selection of seasonal fruits and vegetables, as well as honey, eggs, dairy products, and other locally-made goods. We prioritize sustainability and ethical farming practices, and are proud to support small-scale agriculture. Our friendly and knowledgeable staff are always on hand to provide expert advice and assistance, and we strive to create a warm and welcoming atmosphere for all of our customers. Whether you\'re a home cook, a foodie, or just someone who loves fresh, healthy food, Fresh Market is the perfect place to discover the best of local agriculture.',
    //         products: productIds,
    //         image: 'https://media.istockphoto.com/id/1083286598/photo/keeping-a-close-watch-on-his-crops.jpg?s=612x612&w=0&k=20&c=V6RjPh6icgkxduEig163IMtevL39SxDJJdvJkGmR2NE=',
    //         phone_number: '75609091112',
    //         address: '45 Farmview Ln, State, Country, zip',
    //     },
    // );

    const merchant1 = await User.create(
        {
            username: 'horseranch',
            password: 'password123',
            email: 'horseranch@email.com',
            purchases: [],
            merchant: true,
            business_name: 'Horse Prairie Ranch',
            business_description: 'Our ranch takes pride in providing meat that is free from antibiotics and hormones, ensuring that you are getting the healthiest and tastiest products possible. We work closely with our livestock to ensure that they are well-fed and well-cared for, resulting in meat that is tender and flavorful.',
            products: [products[0]._id, products[1]._id, products[2]._id, products[3]._id, products[4]._id, products[7]._id, products[8]._id],
            image: 'https://preview.redd.it/ynak2cpu3v371.jpg?width=937&format=pjpg&auto=webp&v=enabled&s=bdacc9e1936618d4632c41f232d6d8b06872a429',
            phone_number: '75609091112',
            address: '45 Farmview Ln, State, Country, zip',
        },
    );

    const merchant2 = await User.create(
        {
            username: 'dansfarm',
            password: 'password123',
            email: 'dansfarm@email.com',
            purchases: [],
            merchant: true,
            business_name: 'Dan\'s Farm',
            business_description: 'Welcome to our farm, where we offer a wide variety of fresh fruits and vegetables straight from the fields to your table. Our commitment to quality and sustainability is at the heart of everything we do, and we take pride in growing produce that is both delicious and nutritious.',
            products: [products[5]._id, products[6]._id, products[9]._id, products[10]._id, products[11]._id, products[12]._id, products[13]._id, products[14]._id, products[15]._id, products[16]._id,],
            image: 'https://cdn.shopify.com/s/files/1/0561/1146/4599/t/4/assets/bo8a9976_k42k_500x300_crop_center.jpg',
            phone_number: '7503859245',
            address: '4 Rope Ln, State, Country, zip',
        },
    );

    const merchant3 = await User.create(
        {
            username: 'heathersbakery',
            password: 'password123',
            email: 'heather@email.com',
            purchases: [],
            merchant: true,
            business_name: 'Heather\'s Bakery',
            business_description: 'Welcome to our bakery, where we are dedicated to creating delicious and fresh baked goods every day. From artisanal bread to decadent pastries, we take pride in using only the finest ingredients to ensure that our products are of the highest quality.',
            products: [products[17]._id, products[18]._id, products[19]._id],
            image: 'https://www.bakingbusiness.com/ext/resources/2020/3/la-brea1.jpg?height=635&t=1585589286&width=1200',
            phone_number: '7503859245',
            address: '4 Rope Ln, State, Country, zip',
        },
    );

    const merchant4 = await User.create(
        {
            username: 'henry',
            password: 'password123',
            email: 'henry@email.com',
            purchases: [],
            merchant: true,
            business_name: 'Henry\'s Woodshop',
            business_description: 'Welcome to our woodshop, where we specialize in creating beautiful and functional wooden items by hand. From spoons and spatulas to cutting boards and bowls, our products are carefully crafted from the finest quality wood to provide you with a truly unique and lasting piece.',
            products: [products[20]._id, products[21]._id, products[22]._id],
            image: 'https://static.wixstatic.com/media/600c50_1bc3aab780de4d80a1c9ecefaa89f6af~mv2.jpg/v1/crop/x_0,y_420,w_4163,h_2621/fill/w_566,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/00.jpg',
            phone_number: '7503859245',
            address: '4 Rope Ln, State, Country, zip',
        },
    );
    await Product.updateMany({ category: { $in: ['Meat', 'Livestock'] } }, { $set: { merchant: merchant1._id } });
    await Product.updateMany({ category: { $in: ['Vegetable', 'Fruit', 'Dairy'] } }, { $set: { merchant: merchant2._id } });
    await Product.updateMany({ category: 'Bread'}, { $set: { merchant: merchant3._id } });
    await Product.updateMany({ category: 'Art'}, { $set: { merchant: merchant4._id } });
   
    console.log('Merchants seeded!');

    const purchaseIds = purchases.map(purchase => purchase._id);

    const customer = await User.create(
        {
            username: 'customer',
            password: 'password123',
            email: 'customer@email.com',
            purchases: purchaseIds,
        },
    );

    console.log('Customer seeded!');

    process.exit();
});