const express = require('express');
const hotelRoutes = require('./routes/hotel_details');
require('dotenv').config();
require('./db'); // Ensure PostgreSQL connection is initialized

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/hotels', hotelRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
