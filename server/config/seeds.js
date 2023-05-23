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
            price: 12.56,
            image: 'https://cdn.shopify.com/s/files/1/1862/6381/products/44Farms_09072021_Ribeye_2000x2000px_0f594c83-a04b-42ff-a2d6-ff9a301bbf91_800x.jpg?v=1669322952'
        },
        {
            name: 'New York Strips',
            product_description: '12oz clean cut, and fresh.',
            category: 'Meat',
            stock: 20,
            price: 12.56,
            image: 'https://t4.ftcdn.net/jpg/04/46/67/53/360_F_446675348_IUlAMRbMmHfM8kukpUMHjs6Hvi2nHN50.jpg'
        },
        {
            name: 'Whole Turkey',
            product_description: 'Perfect for Holidays! Average 10lbs',
            category: 'Meat',
            stock: 15,
            price: 18.59,
            image: 'https://images.squarespace-cdn.com/content/v1/58f68693bf629af9cb4e5a07/1574390051283-QEESC6MVJYWY52YDLLV1/raw-turkey.jpg?format=1000w'
        },
        {
            name: 'Whole Chicken',
            product_description: 'Pasture raised and healthy whole chickens.',
            category: 'Meat',
            stock: 20,
            price: 15.78,
            image: 'https://cdn.shopify.com/s/files/1/0244/6177/0816/products/shutterstock_615056252_900x.jpg?v=1569866103'
        },
        {
            name: 'Sausages',
            product_description: 'Fresh mesquite smoked sausages.',
            category: 'Meat',
            stock: 50,
            price: 1.26,
            image: 'https://natashaskitchen.com/wp-content/uploads/2017/04/Homemade-Sausage-2-600x900.jpg'
        },
        {
            name: 'Homemade ice cream',
            product_description: 'We make vanilla, chocolate, strawberry, and pecan! These products are provided by Daisy, our dairy cow.',
            category: 'Dairy',
            stock: 40,
            price: 9.95,
            image: 'https://www.turkeyhill.com/images/frozen-desserts/premium-ice-cream/1-5-qts/homemade-vanilla-ice-cream.jpg'
        },
        {
            name: 'Milk',
            product_description: 'Old fashioned bottled milk. sold in 6 packs. Bring back the bottle for a discount!',
            category: 'Dairy',
            stock: 20,
            price: 6.46,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDHh89HLSDjs9on2saUBwsdUJ4N8Pujr4YgrpHOohbX_JzIBCXRa7O-Ra0l_fLkmNR6Q&usqp=CAU'
        },
        {
            name: 'Chickens',
            product_description: 'Yes, we have our own chickens and we sell them too! We only have hens for sale.',
            category: 'Livestock',
            stock: 20,
            price: 22.93,
            image: 'https://thefrugalchicken.com/wp-content/uploads/2022/11/chickens-perched-min.jpg'
        },
        {
            name: 'Goats',
            product_description: 'We are proud to offer our handsome and healthy billy goats for sale. Our goats are well-bred and well-cared-for, and have been raised on a diet of high-quality hay and grains.',
            category: 'Livestock',
            stock: 8,
            price: 380.35,
            image: 'https://www.openherd.com/userPhotos/Large/2018_636719606622576881.jpg'
        },
        {
            name: 'Granny Smith Apples',
            product_description: 'Freshly picked and washed comes in 2lb fabric bags',
            category: 'Fruit',
            stock: 30,
            price: 7.34,
            image: 'https://cdn.shopify.com/s/files/1/0061/1391/9089/products/grannysmith-apple-B2.jpg?v=1658533149'
        },
        {
            name: 'Strawberries',
            product_description: '1lb bags of 100% natural and fresh strawberries',
            category: 'Fruit',
            stock: 40,
            price: 4.23,
            image: 'https://strawberryplants.org/wp-content/uploads/Keep-Strawberries-Fresh-And-Delicious-featured.jpg'
        },
        {
            name: 'Potatoes',
            product_description: 'Twice rinsed medley potatoes comes in 5lb bags',
            category: 'Vegetable',
            stock: 20,
            price: 2.67,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/1200px-Patates.jpg'
        },
        {
            name: 'Carrots',
            product_description: 'Comes in 2lb bags, rinsed, fresh',
            category: 'Vegetable',
            stock: 100,
            price: 3.58,
            image: 'https://cdn.foodaciously.com/static/stories/92b1a695-549f-4844-89e4-d14bbd83635b/b-roll/carrots-928d18f46ae909971dfc5edc43f28023.webp'
        },
        {
            name: 'Tomatoes',
            product_description: '1 pound boxes of cherry tomatoes',
            category: 'Vegetable',
            stock: 30,
            price: 3.99,
            image: 'https://post.healthline.com/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb.jpg'
        },
        {
            name: 'Red Onions',
            product_description: '1 pound boxes of red onions',
            category: 'Vegetable',
            stock: 30,
            price: 3.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF4UsY2Hclogk0E1ommKEGYveT29ZIgdyEs8IDupZjf2N06es3O9BVJJ-DBZbQsfYNdI&usqp=CAU'
        },
        {
            name: 'Broccoli',
            product_description: 'Broccoli by the pound, bring your own bag!',
            category: 'Vegetable',
            stock: 100,
            price: 2.99,
            image: 'https://www.nature-and-garden.com/wp-content/uploads/2017/06/broccoli-harvest.jpg'
        },
        {
            name: 'Pumpkin',
            product_description: 'Make some pumpkin pie! Prepare for halloween. We are pumpkin kings. Sizes come from small to large.',
            category: 'Vegetable',
            stock: 25,
            price: 4.50,
            image: 'https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2013/8/26/0/pumpkins-fbd6414a0000.jpg.rend.hgtvcom.1280.853.suffix/1452644690051.jpeg'
        },   
        {
            name: 'Sourdough Loaves',
            product_description: 'Baked fresh every morning',
            category: 'Bread',
            stock: 20,
            price: 8.67,
            image: 'https://hips.hearstapps.com/hmg-prod/images/sourdough-bread-horizontal-466-1548048509.jpg?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*'
        },
        {
            name: 'Raisan Bread',
            product_description: 'Multigrain raisan bread. Comes in a loaf.',
            category: 'Bread',
            stock: 15,
            price: 8.25,
            image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/17/1/GH0329H_homemade-cinnamon-raisin-bread_s4x3.jpg.rend.hgtvcom.616.462.suffix/1433584864954.jpeg'
        },
        {
            name: 'Banana Bread',
            product_description: 'Made with flour and bananas. 10 bananas per loaf!',
            category: 'Bread',
            stock: 15,
            price: 12.00,
            image: 'https://www.bowlofdelicious.com/wp-content/uploads/2019/08/Healthy-Banana-Bread-3.jpg'
        },
        {
            name: 'Paintings',
            product_description: 'Variety of landscape paintings that feature the beauties of our town.',
            category: 'Art',
            stock: 12,
            price: 150.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHJ0o7NwTdFxnozEBqWgeD7S6_WAno5fdFhxxLa3N7BiKqiID9W7UQYWTwjYHRMqXAjQ&usqp=CAU'
        },
        {
            name: 'Carved Spoons',
            product_description: 'Beautiful hand carved wood spoons made with mahogany',
            category: 'Art',
            stock: 0,
            price: 3.00,
            image: 'https://images.squarespace-cdn.com/content/v1/5613faf8e4b051c1fb534ae3/1614096998767-GSJNDK29W1BO1FA1S64D/IMG_4581.jpg?format=1000w'
        },
        {
            name: 'Candles',
            product_description: 'Beautiful natural light. We have many aromas to choose from!',
            category: 'Art',
            stock: 45,
            price: 13.99,
            image: 'https://static.wixstatic.com/media/52b027_f77b0f12a9584e9b8b451d35dc1beb29~mv2.jpg/v1/fill/w_630,h_420,al_c,q_85/52b027_f77b0f12a9584e9b8b451d35dc1beb29~mv2.jpg'
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

    const merchant1 = await User.create(
        {
            password: 'password123',
            email: 'horseranch@email.com',
            purchases: [],
            merchant: true,
            business_name: 'Horse Prairie Ranch',
            business_description: 'Our ranch takes pride in providing meat that is free from antibiotics and hormones, ensuring that you are getting the healthiest and tastiest products possible. We work closely with our livestock to ensure that they are well-fed and well-cared for, resulting in meat that is tender and flavorful.',
            products: [products[0]._id, products[1]._id, products[2]._id, products[3]._id, products[4]._id, products[7]._id, products[8]._id],
            image: 'https://foodtank.com/wp-content/uploads/2017/10/food-tank-replenish-excerpt--e1508784410399.jpg',
            phone_number: '75609091112',
            address: '45 Farmview Ln, State, Country, zip',
        },
    );

    const merchant2 = await User.create(
        {
            password: 'password123',
            email: 'dansfarm@email.com',
            purchases: [],
            merchant: true,
            business_name: 'Dan\'s Farm',
            business_description: 'We offer a wide variety of fresh fruits and vegetables straight from the fields to your table. Our commitment to quality and sustainability is at the heart of everything we do, and we take pride in growing produce that is both delicious and nutritious.',
            products: [products[5]._id, products[6]._id, products[9]._id, products[10]._id, products[11]._id, products[12]._id, products[13]._id, products[14]._id, products[15]._id, products[16]._id,],
            image: 'https://cdn.shopify.com/s/files/1/0561/1146/4599/t/4/assets/bo8a9976_k42k_500x300_crop_center.jpg',
            phone_number: '7503859245',
            address: '4 Rope Ln, State, Country, zip',
        },
    );

    const merchant3 = await User.create(
        {
            password: 'password123',
            email: 'heather@email.com',
            purchases: [],
            merchant: true,
            business_name: 'Heather\'s Bakery',
            business_description: 'Here at Heather\'s Bakery, we are dedicated to creating delicious and fresh baked goods every day. From artisanal bread to decadent pastries, we take pride in using only the finest ingredients to ensure that our products are of the highest quality.',
            products: [products[17]._id, products[18]._id, products[19]._id],
            image: 'https://www.bakingbusiness.com/ext/resources/2020/3/la-brea1.jpg?height=635&t=1585589286&width=1200',
            phone_number: '7503859245',
            address: '4 Rope Ln, State, Country, zip',
        },
    );

    const merchant4 = await User.create(
        {
            password: 'password123',
            email: 'henry@email.com',
            purchases: [],
            merchant: true,
            business_name: 'Henry\'s Woodshop',
            business_description: 'We specialize in creating beautiful and functional wooden items by hand. From spoons and spatulas to cutting boards and bowls, our products are carefully crafted from the finest quality wood to provide you with a truly unique and lasting piece.',
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
            password: 'password123',
            email: 'customer@email.com',
            purchases: purchaseIds,
        },
    );

    console.log('Customer seeded!');

    process.exit();
});