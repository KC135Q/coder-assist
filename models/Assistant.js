const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Assistant extends Model {}

Assistant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coder_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Coder',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Assistant',
  }
);

module.exports = Assistant;
