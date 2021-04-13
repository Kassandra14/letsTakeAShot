const sequelize = require('../config/connection');
//const { Model, DataTypes } = require('sequelize');
const { User, SavedLocations } = require('../models');

const userData = require('./userData.json');
const LocationsData = require('./LocationsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

//  await seedUser();

//  await seedSavedLocations ();
  
  for (const project of LocationsData) {
    await SavedLocations.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
