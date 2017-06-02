'use strict'
module.exports = function (sequelize, DataTypes) {
  var Resource = sequelize.define('resource', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Resource.hasMany(models.resource_state)
      }
    }
  })
  return Resource
}
