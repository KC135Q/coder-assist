const Coder = require("./Coder");
const Assistant = require("./Assistant");
const Resource = require("./Resource");

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Coder.hasMany(Assistant, {
  foreignKey: "coder_id",
  onDelete: "CASCADE",
});

// The association can also be created from the Car side
Assistant.belongsTo(Coder, {
  foreignKey: "coder_id",
});

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Coder.hasMany(Resource, {
  foreignKey: "coder_id",
  onDelete: "CASCADE",
});

// The association can also be created from the Car side
Resource.belongsTo(Coder, {
  foreignKey: "coder_id",
});

module.exports = { Assistant, Coder, Resource };
