'use strict';
module.exports = function(sequelize, DataTypes) {
  var resources = sequelize.define('resources', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return resources;
};