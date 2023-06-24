const { Product, ProductSubcategory } = require('../models/index')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const sequelize = require('../db')
const {initModels} = require('../models/init-models')
const { where } = require('sequelize')

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
          IDSubcategory
        } = req.body
      const {Image} = req.files
      let fileName = uuid.v4()+ ".jpg"
      await Image.mv(path.resolve(__dirname, '..', 'static', fileName))
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
       const createProductSubcategory = await ProductSubcategory.create({
         IDProduct: createProduct.IDProduct,
         IDSubcategory,
      })
      return res.json(createProduct)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }

  async getAll (req, res, next) {
    try {
      let {IDSubcategory, limit, page} = req.query
      page = page || 1
      limit = limit || 12
      let offset = page * limit - limit
      let products;
      if (!IDSubcategory) {
        products = await models.Product.findAndCountAll({ limit, offset })
      }
      if (IDSubcategory){
        products = await models.Product.findAndCountAll({
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
      return res.json(products)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }

  async getOne (req, res, next) {
    try {
      const { IDProduct } = req.params
      const product = await Product.findOne({
        where: { IDProduct }
      })

      return res.json(product)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }
  async delete(req, res, next){
    try {
      const { IDProduct } = req.params
      const deleteProductSubcategory = await ProductSubcategory.destroy({
        where: {IDProduct}
      })
      const deleteProduct = await Product.destroy({
        where: {IDProduct}
      })

      return res.json(deleteProductSubcategory, deleteProduct)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  async update(req,res,next){
    try{
      const
      {
          IDProduct,
          IDSubcategory,
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
      await Image.mv(path.resolve(__dirname, '..', 'static', fileName))
      const updateProduct = await Product.update({
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
        },
        {
          where: { IDProduct }
        })
      const updateProductSubcategory = await ProductSubcategory.update({
          IDSubcategory,
        },
        {
          where: { IDProduct }
        })
      return res.json(updateProduct,updateProductSubcategory)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new ProductController()