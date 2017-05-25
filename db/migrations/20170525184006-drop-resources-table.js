'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Resources');
  },

  down: function (queryInterface, Sequelize) { }
};
