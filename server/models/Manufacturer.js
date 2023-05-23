const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Manufacturer', {
    IDManufacturer: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Country: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Manufacturer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Manufacturer_pk",
        unique: true,
        fields: [
          { name: "IDManufacturer" },
        ]
      },
    ]
  });
};
