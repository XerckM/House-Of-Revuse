const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// set config file
dotenv.config({ path: 'server/config/config.env' });

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception.');
    process.exit(1);
})

// connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to unhandled promise rejection.');
    server.close(() => {
        process.exit(1);
    })
})