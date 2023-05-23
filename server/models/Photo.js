const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Photo', {
    IDPhoto: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Path: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    MainOrAdditional: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Photo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Photo_pk",
        unique: true,
        fields: [
          { name: "IDPhoto" },
        ]
      },
    ]
  });
};
