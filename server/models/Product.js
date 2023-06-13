const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    IDProduct: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Weight: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Height: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Lenght: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ProductType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TypeOfInstallation: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Colour: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DesignStyle: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    HousingMaterial: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VendorCode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    InStock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IDManufacturer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Manufacturer',
        key: 'IDManufacturer'
      }
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Product_pk",
        unique: true,
        fields: [
          { name: "IDProduct" },
        ]
      },
    ]
  });
};
