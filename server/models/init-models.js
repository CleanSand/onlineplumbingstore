var DataTypes = require("sequelize").DataTypes;
var _Category = require("./Category");
var _CategorySubcategory = require("./CategorySubcategory");
var _HomeAddress = require("./HomeAddress");
var _ItemsInTheKit = require("./ItemsInTheKit");
var _Manufacturer = require("./Manufacturer");
var _Payment = require("./Payment");
var _Photo = require("./Photo");
var _Product = require("./Product");
var _ProductPayment = require("./ProductPayment");
var _ProductPhoto = require("./ProductPhoto");
var _ProductSubcategory = require("./ProductSubcategory");
var _Set = require("./Set");
var _Subcategory = require("./Subcategory");
var _User = require("./User");

function initModels(sequelize) {
  var Category = _Category(sequelize, DataTypes);
  var CategorySubcategory = _CategorySubcategory(sequelize, DataTypes);
  var HomeAddress = _HomeAddress(sequelize, DataTypes);
  var ItemsInTheKit = _ItemsInTheKit(sequelize, DataTypes);
  var Manufacturer = _Manufacturer(sequelize, DataTypes);
  var Payment = _Payment(sequelize, DataTypes);
  var Photo = _Photo(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var ProductPayment = _ProductPayment(sequelize, DataTypes);
  var ProductPhoto = _ProductPhoto(sequelize, DataTypes);
  var ProductSubcategory = _ProductSubcategory(sequelize, DataTypes);
  var Set = _Set(sequelize, DataTypes);
  var Subcategory = _Subcategory(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  CategorySubcategory.belongsTo(Category, { as: "IDCategory_Category", foreignKey: "IDCategory"});
  Category.hasMany(CategorySubcategory, { as: "CategorySubcategories", foreignKey: "IDCategory"});
  User.belongsTo(HomeAddress, { as: "IDHomeAddress_HomeAddress", foreignKey: "IDHomeAddress"});
  HomeAddress.hasMany(User, { as: "Users", foreignKey: "IDHomeAddress"});
  Set.belongsTo(ItemsInTheKit, { as: "IDItemsInTheKit_ItemsInTheKit", foreignKey: "IDItemsInTheKit"});
  ItemsInTheKit.hasMany(Set, { as: "Sets", foreignKey: "IDItemsInTheKit"});
  Product.belongsTo(Manufacturer, { as: "IDManufacturer_Manufacturer", foreignKey: "IDManufacturer"});
  Manufacturer.hasMany(Product, { as: "Products", foreignKey: "IDManufacturer"});
  ProductPayment.belongsTo(Payment, { as: "IDPayment_Payment", foreignKey: "IDPayment"});
  Payment.hasMany(ProductPayment, { as: "ProductPayments", foreignKey: "IDPayment"});
  ProductPhoto.belongsTo(Photo, { as: "IDPhoto_Photo", foreignKey: "IDPhoto"});
  Photo.hasMany(ProductPhoto, { as: "ProductPhotos", foreignKey: "IDPhoto"});
  ProductPayment.belongsTo(Product, { as: "IDProduct_Product", foreignKey: "IDProduct"});
  Product.hasMany(ProductPayment, { as: "ProductPayments", foreignKey: "IDProduct"});
  ProductPhoto.belongsTo(Product, { as: "IDProduct_Product", foreignKey: "IDProduct"});
  Product.hasMany(ProductPhoto, { as: "ProductPhotos", foreignKey: "IDProduct"});
  ProductSubcategory.belongsTo(Product, { as: "IDProduct_Product", foreignKey: "IDProduct"});
  Product.hasMany(ProductSubcategory, { as: "ProductSubcategories", foreignKey: "IDProduct"});
  Set.belongsTo(Product, { as: "IDProduct_Product", foreignKey: "IDProduct"});
  Product.hasMany(Set, { as: "Sets", foreignKey: "IDProduct"});
  CategorySubcategory.belongsTo(Subcategory, { as: "IDSubcategory_Subcategory", foreignKey: "IDSubcategory"});
  Subcategory.hasMany(CategorySubcategory, { as: "CategorySubcategories", foreignKey: "IDSubcategory"});
  ProductSubcategory.belongsTo(Subcategory, { as: "IDSubcategory_Subcategory", foreignKey: "IDSubcategory"});
  Subcategory.hasMany(ProductSubcategory, { as: "ProductSubcategories", foreignKey: "IDSubcategory"});
  Payment.belongsTo(User, { as: "IDUser_User", foreignKey: "IDUser"});
  User.hasMany(Payment, { as: "Payments", foreignKey: "IDUser"});

  return {
    Category,
    CategorySubcategory,
    HomeAddress,
    ItemsInTheKit,
    Manufacturer,
    Payment,
    Photo,
    Product,
    ProductPayment,
    ProductPhoto,
    ProductSubcategory,
    Set,
    Subcategory,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
