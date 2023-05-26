const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payment', {
    IDPayment: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'IDUser'
      }
    },
    FinalPrice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    PurchaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    FinalQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Delivery: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Payment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Payment_pk",
        unique: true,
        fields: [
          { name: "IDPayment" },
        ]
      },
    ]
  });
};
