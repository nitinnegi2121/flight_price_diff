const express = require("express");
const router = express.Router();

const{getflight, flightPrices} = require('../controllers/flight');

router.route('/').get(getflight);
router.route('/flights').get(flightPrices);

module.exports = router;