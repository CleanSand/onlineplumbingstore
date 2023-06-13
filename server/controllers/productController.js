const { Product } = require('../models/index')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const sequelize = require('../db')
const {initModels} = require('../models/init-models')

const models = initModels(sequelize)

class ProductController {
  async create (req, res, next) {
    try {
      const
        {
          Name,
          Weight,
          Height,
          Lenght,
          Description,
          Price,
          ProductType,
          TypeOfInstallation,
          Colour,
          DesignStyle,
          HousingMaterial,
          VendorCode,
          InStock,
          IDManufacturer,
        } = req.body
      const {Image} = req.files
      let fileName = uuid.v4()+ ".jpg"
      Image.mv(path.resolve(__dirname, '..', 'static', fileName))
      const createProduct = await Product.create({
        Name,
        Weight,
        Height,
        Lenght,
        Description,
        Price,
        ProductType,
        TypeOfInstallation,
        Colour,
        DesignStyle,
        HousingMaterial,
        VendorCode,
        InStock,
        IDManufacturer,
        Image: fileName
      })
      return res.json(createProduct)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }

  async getAll (req, res, next) {
    try {
      let {IDCategory, IDSubcategory, limit, page} = req.query
      page = page || 1
      limit = limit || 12
      let offset = page * limit - limit
      let products;
      if (!IDCategory && !IDSubcategory) {
        products = await models.Product.findAndCountAll({ limit, offset })
      }
      if (IDCategory && !IDSubcategory){
        products = await models.Product.findAndCountAll({
          limit,
          offset,
          include:[{
            model: models.ProductCategory,
            association: 'ProductCategories',
            where: {IDCategory: IDCategory},
            include:[{
              model: models.Category,
              association: 'IDCategory_Category'
            }]
          }]
        })
      }
      if (!IDCategory && IDSubcategory){
        products = await models.Product.findAndCountAll({
          limit,
          offset,
          include:[{
            model: models.ProductSubcategory,
            association: 'ProductSubcategories',
            where: {IDSubcategory: IDSubcategory},
            include:[{
              model: models.Subcategory,
              association: 'IDSubcategory_Subcategory'
            }]
          }]
        })
      }
      if (IDCategory && IDSubcategory){
        products = await models.Product.findAndCountAll({
          limit,
          offset,
          include:[{
            model: models.ProductCategory,
            association: 'ProductCategories',
            where: {IDCategory: IDCategory},
            include:[{
              model: models.Category,
              association: 'IDCategory_Category'
            }],
          },
            {
              model: models.ProductSubcategory,
              association: 'ProductSubcategories',
              where: {IDSubcategory: IDSubcategory},
              include:[{
                model: models.Subcategory,
                association: 'IDSubcategory_Subcategory'
              }]
            }]
        })
      }
      return res.json(products)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }

  async getOne (req, res, next) {
    try {
      const { IDProduct } = req.params
      const product = await Product.findOne(
        {
          where: { IDProduct },
        },
      )

      return res.json(product)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }
}

module.exports = new ProductController()