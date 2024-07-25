const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel_details');
const upload = require('../middlewares/upload');

// Create a new hotel
router.post('/', upload.array('images', 10), hotelController.createHotel); // Allow up to 10 images
// router.post('/', upload.array('images', 10), hotelController.createHotel);



module.exports = router;
