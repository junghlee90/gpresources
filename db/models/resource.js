'use strict';
module.exports = function(sequelize, DataTypes) {
  var resource = sequelize.define('resource', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return resource;
};