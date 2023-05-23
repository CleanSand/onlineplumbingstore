const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    IDCategory: {
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
    tableName: 'Category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Category_pk",
        unique: true,
        fields: [
          { name: "IDCategory" },
        ]
      },
    ]
  });
};
