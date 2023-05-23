const { Product } = require('../models/index')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

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
      const {Image} = req.file
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
      const products = await Product.findAll()
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