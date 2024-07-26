const { Hotel } = require('../models/hotels');

exports.createHotel = async (req, res) => {
    try {
        const {
            slug, title, description, guestCount, bedroomCount, bathroomCount,
            amenities, hostInformation, address, latitude, longitude
        } = req.body;

        const images = req.files.map(file => `/uploads/${file.filename}`);

        const hotel = await Hotel.create({
            slug, images, title, description, guestCount, bedroomCount, bathroomCount,
            amenities: amenities ? amenities.split(',') : [],
            hostInformation, address, latitude, longitude
        });

        res.status(201).json(hotel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
