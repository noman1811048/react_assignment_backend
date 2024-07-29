const express = require('express');
const router = express.Router();
const roomController = require('../controllers/rooms');
const upload = require('../middlewares/upload'); 

// Create a new room with multiple image uploads
router.post('/', upload.array('room_image', 10), roomController.createRoom); 

// Get rooms by hotel slug
router.get('/:hotel_slug', roomController.getRoomsByHotel);

module.exports = router;
