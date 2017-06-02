'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('resources')
  },
  down: function (queryInterface, Sequelize) {
  }
}
