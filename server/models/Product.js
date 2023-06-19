const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    IDProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Weight: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Height: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Lenght: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ProductType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TypeOfInstallation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Colour: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DesignStyle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HousingMaterial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VendorCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InStock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IDManufacturer: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
