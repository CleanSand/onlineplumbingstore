const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Role', {
    IDRole: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RoleName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Role_pk",
        unique: true,
        fields: [
          { name: "IDRole" },
        ]
      },
    ]
  });
};
