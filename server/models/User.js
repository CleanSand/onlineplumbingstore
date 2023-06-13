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
      allowNull: true
    },
    SecondName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PhoneNumber: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BirthDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    IDHomeAddress: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HomeAddress',
        key: 'IDHomeAddress'
      }
    },
    IDRole: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Role',
        key: 'IDRole'
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
