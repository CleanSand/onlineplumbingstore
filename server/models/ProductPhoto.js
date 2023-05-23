const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductPhoto', {
    IDProductPhoto: {
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
    IDPhoto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Photo',
        key: 'IDPhoto'
      }
    }
  }, {
    sequelize,
    tableName: 'ProductPhoto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ProductPhoto_pk",
        unique: true,
        fields: [
          { name: "IDProductPhoto" },
        ]
      },
    ]
  });
};
