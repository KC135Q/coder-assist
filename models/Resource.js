const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Resource extends Model {}

Resource.init(
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coder_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "coder",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Resource",
  }
);

module.exports = Resource;
