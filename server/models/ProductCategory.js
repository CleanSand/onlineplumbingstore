const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductCategory', {
    IDProductCategory: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDProduct: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Product',
        key: 'IDProduct'
      }
    },
    IDCategory: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Category',
        key: 'IDCategory'
      }
    }
  }, {
    sequelize,
    tableName: 'ProductCategory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ProductCategory_pk",
        unique: true,
        fields: [
          { name: "IDProductCategory" },
        ]
      },
    ]
  });
};
