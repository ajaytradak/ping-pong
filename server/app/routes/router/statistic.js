var express = require('express');
var router = express.Router();


/**
 * Statistic controller
 */
var statistic = require('../../controllers/api/v1/statistic');
statistic = new statistic();

/**
 * Validations
 */
const statisticValidator = require('../../validators/statistic');

/**
 * Statistic Routes
 */
router.post('/statistic/store', [statisticValidator.validator], statistic.store);

module.exports = router;
