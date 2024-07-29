const express = require('express');
const cors = require('cors');
const path = require('path'); 
const app = express();
const hotelRoutes = require('./routes/hotels');
const roomRoutes = require('./routes/rooms'); 
require('./config/db'); 

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "uploads" directory
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/hotels', hotelRoutes);
app.use('/api/rooms', roomRoutes); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
