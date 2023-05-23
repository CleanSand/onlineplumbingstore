const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Subcategory', {
    IDSubcategory: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Subcategory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Subcategory_pk",
        unique: true,
        fields: [
          { name: "IDSubcategory" },
        ]
      },
    ]
  });
};
