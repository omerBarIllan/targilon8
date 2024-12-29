const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const articleRoutes = require('./routes/articleRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Use routes
app.use('/api/articles', articleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
