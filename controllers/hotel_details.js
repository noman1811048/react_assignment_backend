const HotelDetails = require('../models/hotel_details');

exports.createHotel = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    console.log('Request files:', req.files);

    // Destructure fields from req.body, use trim() to remove any leading/trailing whitespace
    const { 
      slug,
      title,
      description,
      guest_count,
      bedroom_count,
      bathroom_count,
      amenities,
      host_information,
      address,
      latitude,
      longitude,
      images: imagesString
    } = Object.fromEntries(
      Object.entries(req.body).map(([key, value]) => [key.trim(), value])
    );

    // Parse numeric fields with error handling
    const parseNumber = (value, fieldName) => {
      const parsed = Number(value);
      if (isNaN(parsed)) {
        throw new Error(`${fieldName} must be a valid number`);
      }
      return parsed;
    };

    const parsedGuestCount = parseNumber(guest_count, 'guest_count');
    const parsedBedroomCount = parseNumber(bedroom_count, 'bedroom_count');
    const parsedBathroomCount = parseNumber(bathroom_count, 'bathroom_count');
    const parsedLatitude = parseNumber(latitude, 'latitude');
    const parsedLongitude = parseNumber(longitude, 'longitude');

    // Parse JSON fields
    const parseJSON = (value, fieldName) => {
      if (typeof value === 'string') {
        try {
          return JSON.parse(value);
        } catch (error) {
          console.warn(`Failed to parse ${fieldName} as JSON:`, error);
          return null;
        }
      }
      return value; // Return as-is if it's not a string
    };

    const parsedAmenities = parseJSON(amenities, 'amenities') || [];
    const parsedHostInfo = parseJSON(host_information, 'host_information') || {};

    // Handle image uploads
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map(file => ({ path: file.path }));
    } else if (imagesString) {
      // If images are sent as a string, parse it
      images = parseJSON(imagesString, 'images');
      // If parsing fails or results in a non-array, throw an error
      if (!Array.isArray(images)) {
        throw new Error('Parsed images is not an array');
      }
    }

    console.log('Parsed images:', images);  // Log the parsed images for debugging

    // Create a new hotel record using Sequelize
    const newHotel = await HotelDetails.create({
      slug,
      title,
      description,
      guest_count: parsedGuestCount,
      bedroom_count: parsedBedroomCount,
      bathroom_count: parsedBathroomCount,
      amenities: parsedAmenities,
      host_information: parsedHostInfo,
      address,
      latitude: parsedLatitude,
      longitude: parsedLongitude,
      images
    });

    res.status(201).json(newHotel);
  } catch (error) {
    console.error('Error creating hotel:', error);
    res.status(400).json({ error: error.message });
  }
};