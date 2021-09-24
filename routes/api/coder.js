const router = require("express").Router();
// Include a model
const { Coder, Assistant, Resource } = require("../../models");

// Starting route is /api/coder
// GET all coders
router.get("/", async (req, res) => {
  // Query the database
  try {
    const coderData = await Coder.findAll({
      include: [{ model: Assistant }, { model: Resource }],
    });

    res.status(200).json(coderData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
