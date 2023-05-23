const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CategorySubcategory', {
    IDCategorySubcategory: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'IDCategory'
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
    tableName: 'CategorySubcategory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "CategorySubcategory_pk",
        unique: true,
        fields: [
          { name: "IDCategorySubcategory" },
        ]
      },
    ]
  });
};
