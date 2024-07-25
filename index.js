const express = require('express');
const hotelRoutes = require('./routes/hotel_details');
require('dotenv').config();
require('./db'); // Ensure Sequelize is initialized
const upload = require('./middlewares/upload'); // Import the Multer middleware

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/hotels', hotelRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
