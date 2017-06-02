'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('resource_state');
  },
  down: function(queryInterface, Sequelize) {
  }
};
