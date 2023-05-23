const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HomeAddress', {
    IDHomeAddress: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Town: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Street: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NumberHome: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HomeAddress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "HomeAddress_pk",
        unique: true,
        fields: [
          { name: "IDHomeAddress" },
        ]
      },
    ]
  });
};
