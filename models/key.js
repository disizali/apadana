'use strict';
module.exports = (sequelize, DataTypes) => {
  const Key = sequelize.define('Key', {
    token: DataTypes.TEXT,
    searchEngine: DataTypes.TEXT,
    used: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {});
  Key.associate = function(models) {
    // associations can be defined here
  };
  return Key;
};