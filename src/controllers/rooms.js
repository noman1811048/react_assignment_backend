const { Room, Hotel } = require('../models/hotels');

exports.createRoom = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        console.log('Request Files:', req.files);

        const { hotel_slug, room_slug, room_title, bedroom_count } = req.body;

        // Ensure that the hotel_slug exists
        const hotel = await Hotel.findByPk(hotel_slug);
        if (!hotel) {
            return res.status(404).json({ error: 'Hotel not found' });
        }

        // Process multiple images
        const room_image = req.files.map(file => `/uploads/${file.filename}`); // Correct path to image files

        const room = await Room.create({
            hotel_slug, room_slug, room_image: room_image, room_title, bedroom_count
        });

        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getRoomsByHotel = async (req, res) => {
    try {
        let { hotel_slug } = req.params;
        hotel_slug = hotel_slug.trim(); // Remove any leading/trailing whitespace

        const rooms = await Room.findAll({ where: { hotel_slug: hotel_slug } });

        if (rooms.length === 0) {
            return res.status(404).json({ error: 'No rooms found for this hotel' });
        }

        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
