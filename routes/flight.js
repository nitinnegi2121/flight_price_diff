const express = require("express");
const router = express.Router();

//This is the comment 

const{getflight, flightPrices} = require('../controllers/flight');

router.route('/').get(getflight);
router.route('/flights').get(flightPrices);

module.exports = router;