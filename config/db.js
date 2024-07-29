// config/db.js
const { Sequelize } = require('sequelize');
const config = require('./config.json');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize(config.database.name, config.database.user, config.database.password, {
  host: config.database.host,
  dialect: 'postgres',
  port: config.database.port,
  logging: false 
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectDB();

module.exports = sequelize;
