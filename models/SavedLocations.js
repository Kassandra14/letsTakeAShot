const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedLocations extends Model {}

SavedLocations.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    risk_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    quarantine_needed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = SavedLocations;
