'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      player1_name: {
        type: Sequelize.STRING
      },
      player1_score: {
        type: Sequelize.INTEGER
      },
      player2_name: {
        type: Sequelize.STRING
      },
      player2_score: {
        type: Sequelize.INTEGER
      },
      winner: {
        type: Sequelize.STRING
      },
      margin: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        field: "created_at",
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(6)")
      },
      updatedAt: {
        allowNull: true,
        field: "updated_at",
        type: Sequelize.DATE
      }
    },
    {
      underscored: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('statistics');
  }
};
