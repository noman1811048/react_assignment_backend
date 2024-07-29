const { Hotel, Room } = require('../models/hotels');

exports.createHotel = async (req, res) => {
    try {
        const {
            slug, title, description, guest_count, bedroom_count, bathroom_count,
            amenities, host_information, address, latitude, longitude
        } = req.body;


        if (!slug || !title || !description) {
            return res.status(400).json({ error: 'Required fields are missing' });
        }

        const images = req.files.map(file => `/uploads/${file.filename}`);

        const hotel = await Hotel.create({
            slug, images, title, description, guest_count, bedroom_count, bathroom_count,
            amenities: amenities ? amenities.split(',') : [],
            host_information, address, latitude, longitude
        });

        res.status(201).json(hotel);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.findAll({
            include: [{
                model: Room,
                as: 'rooms'
            }]
        });
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
