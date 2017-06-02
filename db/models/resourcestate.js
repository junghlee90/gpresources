'use strict'
module.exports = function (sequelize, DataTypes) {
  var ResourceState = sequelize.define('resource_state', {
    count: DataTypes.INTEGER,
    location: DataTypes.STRING,
    borrowed: DataTypes.BOOLEAN,
    borrowed_by: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        ResourceState.belongsTo(models.resource)
      }
    }
  })
  return ResourceState
}
