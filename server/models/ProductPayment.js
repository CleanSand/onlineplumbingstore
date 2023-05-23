const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductPayment', {
    IDProductPayment: {
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
    IDPayment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Payment',
        key: 'IDPayment'
      }
    }
  }, {
    sequelize,
    tableName: 'ProductPayment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ProductPayment_pk",
        unique: true,
        fields: [
          { name: "IDProductPayment" },
        ]
      },
    ]
  });
};
