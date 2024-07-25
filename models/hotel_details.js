const pool = require('../db');

const HotelDetails = {
  create: async (data) => {
    const query = `
      INSERT INTO hotel_details 
      (slug, title, description, guest_count, bedroom_count, bathroom_count, amenities, host_information, address, latitude, longitude, images) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING *;
    `;
    const values = [
      data.slug,
      data.title,
      data.description,
      data.guest_count,
      data.bedroom_count,
      data.bathroom_count,
      data.amenities, // Pass the array directly
      data.host_information, // Assuming host_information is also an array
      data.address,
      data.latitude,
      data.longitude,
      data.images, // Handle images appropriately
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
  },
};

module.exports = HotelDetails;
