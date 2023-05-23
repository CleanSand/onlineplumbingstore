const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductSubcategory', {
    IDProductSubcategory: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'IDProduct'
      }
    },
    IDSubcategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subcategory',
        key: 'IDSubcategory'
      }
    }
  }, {
    sequelize,
    tableName: 'ProductSubcategory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ProductSubcategory_pk",
        unique: true,
        fields: [
          { name: "IDProductSubcategory" },
        ]
      },
    ]
  });
};
