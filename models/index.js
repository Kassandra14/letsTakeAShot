const User = require('./User');
const SavedLocations = require('./SavedLocations');

User.hasMany(SavedLocations, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

SavedLocations.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, SavedLocations };
