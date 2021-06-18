'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  statistic.init({
    player1_name: DataTypes.STRING,
    player1_score: DataTypes.INTEGER,
    player2_name: DataTypes.STRING,
    player2_score: DataTypes.INTEGER,
    winner: DataTypes.STRING,
    margin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'statistic',
    tableName: 'statistics',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return statistic;
};
