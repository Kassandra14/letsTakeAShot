const sequelize = require('../config/connection');
const { User, SavedLocations } = require('../models');

const userData = require('./userData.json');
const LocationsData = require('./LocationsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of LocationsData) {
    await SavedLocations.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
