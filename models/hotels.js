// models/hotels.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Hotel = sequelize.define('Hotel', {
    slug: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    guest_count: {
        type: DataTypes.INTEGER
    },
    bedroom_count: {
        type: DataTypes.INTEGER
    },
    bathroom_count: {
        type: DataTypes.INTEGER
    },
    amenities: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    host_information: {
        type: DataTypes.TEXT
    },
    address: {
        type: DataTypes.TEXT
    },
    latitude: {
        type: DataTypes.DECIMAL(9, 6)
    },
    longitude: {
        type: DataTypes.DECIMAL(9, 6)
    }
}, {
    tableName: 'hotels',
    timestamps: false
});

const Room = sequelize.define('Room', {
    hotel_slug: {
        type: DataTypes.STRING,
        references: {
            model: Hotel,
            key: 'slug'
        }
    },
    room_slug: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    room_image: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    room_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bedroom_count: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'hotel_rooms',
    timestamps: false
});

// Define associations
Hotel.hasMany(Room, { foreignKey: 'hotel_slug', as: 'rooms' });
Room.belongsTo(Hotel, { foreignKey: 'hotel_slug' });

module.exports = { Hotel, Room };
