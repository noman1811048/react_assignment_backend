const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Adjust path as per your project structure

const HotelDetails = sequelize.define('HotelDetails', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  slug: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  guest_count: {
    type: DataTypes.INTEGER,
  },
  bedroom_count: {
    type: DataTypes.INTEGER,
  },
  bathroom_count: {
    type: DataTypes.INTEGER,
  },
  amenities: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings
    allowNull: false, // Ensure it's not nullable if required
  },
  host_information: {
    type: DataTypes.JSON,
    allowNull: false, // Ensure it's not nullable if required
  },
  address: {
    type: DataTypes.STRING(255),
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
  },
  images: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
}, {
  tableName: 'hotel_details',
  timestamps: false,
});

module.exports = HotelDetails;
