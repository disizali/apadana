"use strict";
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      website: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      information: DataTypes.TEXT
    },
    {}
  );
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};