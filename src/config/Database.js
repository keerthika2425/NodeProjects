const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://diva:divakar2004@divacluster.4zroa.mongodb.net/uservalidation';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
