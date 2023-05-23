const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Set', {
    IDSet: {
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
    IDItemsInTheKit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ItemsInTheKit',
        key: 'IDItemsInTheKit'
      }
    }
  }, {
    sequelize,
    tableName: 'Set',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Set_pk",
        unique: true,
        fields: [
          { name: "IDSet" },
        ]
      },
    ]
  });
};
