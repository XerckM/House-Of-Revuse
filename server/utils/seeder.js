const Product = require('../models/productModel');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/product.json');


// set config file
dotenv.config({ path: 'server/config/config.env' });

// connect to database
connectDatabase();

const seedProducts = async () => {
    try {

        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products);
        console.log('All Products are added.');

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();