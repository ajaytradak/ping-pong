const { check } = require('express-validator');

exports.validator = [
  check('player1_name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Player1 name is a required field')
    .bail(),
  check('player1_score')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Player1 score is a required field')
    .bail(),
  check('player2_name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Player2 name is a required field')
    .bail(),
  check('player2_score')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Player2 score is a required field')
    .bail(),
  check('winner')
    .trim()
    .escape()
    .bail(),
  check('margin')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Margin is a required field')
    .bail(),
];
