const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotels'); // Ensure this path is correct
const upload = require('../middlewares/upload');

// Create a new hotel
router.post('/', upload.array('images', 10), hotelController.createHotel); // Allow up to 10 images

// Get all hotels with associated rooms
router.get('/', hotelController.getHotels);

module.exports = router;

