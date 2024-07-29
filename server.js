const express = require('express');
const app = express();
const hotelRoutes = require('./routes/hotels');
const roomRoutes = require('./routes/rooms'); // Add this line
require('./config/db'); // Ensure PostgreSQL connection is initialized

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/hotels', hotelRoutes);
app.use('/api/rooms', roomRoutes); // Add this line

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
