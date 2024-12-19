// app.js
const express = require('express');
const connectDB = require('./src/config/Database');
const userRoutes = require('./src/routes/UserRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/uservalidation/users', userRoutes);

// Server Initialization!
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
