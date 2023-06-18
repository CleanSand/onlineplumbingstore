var DataTypes = require("sequelize").DataTypes;
var _Category = require("./Category");
var _CategorySubcategory = require("./CategorySubcategory");
var _HomeAddress = require("./HomeAddress");
var _Manufacturer = require("./Manufacturer");
var _Payment = require("./Payment");
var _Product = require("./Product");
var _ProductPayment = require("./ProductPayment");
var _ProductSubcategory = require("./ProductSubcategory");
var _Role = require("./Role");
var _Subcategory = require("./Subcategory");
var _User = require("./User");

function initModels(sequelize) {
  var Category = _Category(sequelize, DataTypes);
  var CategorySubcategory = _CategorySubcategory(sequelize, DataTypes);
  var HomeAddress = _HomeAddress(sequelize, DataTypes);
  var Manufacturer = _Manufacturer(sequelize, DataTypes);
  var Payment = _Payment(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var ProductPayment = _ProductPayment(sequelize, DataTypes);
  var ProductSubcategory = _ProductSubcategory(sequelize, DataTypes);
  var Role = _Role(sequelize, DataTypes);
  var Subcategory = _Subcategory(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  CategorySubcategory.belongsTo(Category, { as: "IDCategory_Category", foreignKey: "IDCategory"});
  Category.hasMany(CategorySubcategory, { as: "CategorySubcategories", foreignKey: "IDCategory"});
  User.belongsTo(HomeAddress, { as: "IDHomeAddress_HomeAddress", foreignKey: "IDHomeAddress"});
  HomeAddress.hasMany(User, { as: "Users", foreignKey: "IDHomeAddress"});
  Product.belongsTo(Manufacturer, { as: "IDManufacturer_Manufacturer", foreignKey: "IDManufacturer"});
  Manufacturer.hasMany(Product, { as: "Products", foreignKey: "IDManufacturer"});
  ProductPayment.belongsTo(Payment, { as: "IDPayment_Payment", foreignKey: "IDPayment"});
  Payment.hasMany(ProductPayment, { as: "ProductPayments", foreignKey: "IDPayment"});
  ProductPayment.belongsTo(Product, { as: "IDProduct_Product", foreignKey: "IDProduct"});
  Product.hasMany(ProductPayment, { as: "ProductPayments", foreignKey: "IDProduct"});
  ProductSubcategory.belongsTo(Product, { as: "IDProduct_Product", foreignKey: "IDProduct"});
  Product.hasMany(ProductSubcategory, { as: "ProductSubcategories", foreignKey: "IDProduct"});
  User.belongsTo(Role, { as: "IDRole_Role", foreignKey: "IDRole"});
  Role.hasMany(User, { as: "Users", foreignKey: "IDRole"});
  CategorySubcategory.belongsTo(Subcategory, { as: "IDSubcategory_Subcategory", foreignKey: "IDSubcategory"});
  Subcategory.hasMany(CategorySubcategory, { as: "CategorySubcategories", foreignKey: "IDSubcategory"});
  ProductSubcategory.belongsTo(Subcategory, { as: "IDSubcategory_Subcategory", foreignKey: "IDSubcategory"});
  Subcategory.hasMany(ProductSubcategory, { as: "ProductSubcategories", foreignKey: "IDSubcategory"});
  ProductPayment.belongsTo(User, { as: "IDUser_User", foreignKey: "IDUser"});
  User.hasMany(ProductPayment, { as: "ProductPayments", foreignKey: "IDUser"});

  return {
    Category,
    CategorySubcategory,
    HomeAddress,
    Manufacturer,
    Payment,
    Product,
    ProductPayment,
    ProductSubcategory,
    Role,
    Subcategory,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
