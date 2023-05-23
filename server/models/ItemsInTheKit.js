const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ItemsInTheKit', {
    IDItemsInTheKit: {
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
    tableName: 'ItemsInTheKit',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ItemsInTheKit_pk",
        unique: true,
        fields: [
          { name: "IDItemsInTheKit" },
        ]
      },
    ]
  });
};
