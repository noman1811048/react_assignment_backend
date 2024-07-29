const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotels'); 
const upload = require('../middlewares/upload');

// Create a new hotel
router.post('/', upload.array('images', 10), hotelController.createHotel); 

// Get all hotels with associated rooms
router.get('/', hotelController.getHotels);

module.exports = router;

