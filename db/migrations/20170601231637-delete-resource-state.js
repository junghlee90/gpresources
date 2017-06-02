'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('resource_states')
  },
  down: function (queryInterface, Sequelize) {
  }
}
