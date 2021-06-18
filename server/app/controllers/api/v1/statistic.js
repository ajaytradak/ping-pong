require('dotenv').config();

const { validationResult } = require('express-validator');

/**
 * Helpers
 */
var responseHandler = require('../../../helpers/response-handler');
responseHandler = new responseHandler();

/**
 * Models
 */
const models = require('../../../models');
const statistic = models.statistic;


class Statistic {
  /**
   * @api {post} /statistic/store Handles statistics storage operation
   *
   * @apiSuccess (200) {Object}
   */
  store = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return responseHandler.error(res, 422, errors.array());
    }

    statistic.create({
      player1_name: req.body.player1_name,
      player1_score: req.body.player1_score,
      player2_name: req.body.player2_name,
      player2_score: req.body.player2_score,
      winner: req.body.winner,
      margin: req.body.margin
    })
    .then(response => {
      return responseHandler.success(
        res, 'Statistics has been stored successfully');
    })
    .catch(err => {
      return responseHandler.error(res, 500, err.message);
    });
  }
}

module.exports = Statistic;
