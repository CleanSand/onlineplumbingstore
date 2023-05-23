const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    IDUser: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SecondName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    BirthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Gender: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    IDHomeAddress: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HomeAddress',
        key: 'IDHomeAddress'
      }
    }
  }, {
    sequelize,
    tableName: 'User',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "User_Email_uindex",
        unique: true,
        fields: [
          { name: "Email" },
        ]
      },
      {
        name: "User_PhoneNumber_uindex",
        unique: true,
        fields: [
          { name: "PhoneNumber" },
        ]
      },
      {
        name: "User_pk",
        unique: true,
        fields: [
          { name: "IDUser" },
        ]
      },
    ]
  });
};
