const router = require('express').Router();
const coderRoute = require('./coder');

// Starting from /api

// /api/coder routes use  the coder.js file :)
router.use('/coder', coderRoute);

module.exports = router;