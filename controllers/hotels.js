const { Hotel, Room } = require('../models/hotels');

exports.createHotel = async (req, res) => {
    try {
        const {
            slug, title, description, guest_count, bedroom_count, bathroom_count,
            amenities, host_information, address, latitude, longitude
        } = req.body;

        const images = req.files.map(file => `/uploads/${file.filename}`);

        const hotel = await Hotel.create({
            slug, images, title, description, guest_count, bedroom_count, bathroom_count,
            amenities: amenities ? amenities.split(',') : [],
            host_information, address, latitude, longitude
        });

        res.status(201).json(hotel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.findAll({
            include: [{
                model: Room,
                as: 'rooms' // Alias for the association, if any
            }]
        });
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
