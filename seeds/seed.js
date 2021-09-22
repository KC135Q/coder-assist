const sequelize = require("../config/connection");
const { Assistant, Coder, Resource } = require("../models");

const coderSeedData = require("./coderSeedData.json");
const assistantSeedData = require("./assistantSeedData.json");
const resourceSeedData = require("./resourceSeedData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Coder.bulkCreate(coderSeedData);
    await Assistant.bulkCreate(assistantSeedData);
    await Resource.bulkCreate(resourceSeedData);
  } catch (error) {
    console.warn(error);
  }


  process.exit(0);
};

seedDatabase();
