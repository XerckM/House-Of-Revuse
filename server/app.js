const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());
app.use(cookieParser());

// Import all routes
const products = require('./routes/productRoute');
const auth = require('./routes/authRoute');
const order = require('./routes/orderRoute');

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;