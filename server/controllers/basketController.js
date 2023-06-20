const { ProductPayment, User } = require('../models')
const ApiError = require('../error/ApiError')
const {initModels} = require('../models/init-models')

const sequelize = require('../db')
const models = initModels(sequelize)
class BasketController {
  async add(req,res, next){
    try{
      const {IDProduct, IDUser} = req.body
      const availableProduct = await ProductPayment.findOne({ where: {IDUser, IDProduct} })
      if(!availableProduct){
        const basket = await ProductPayment.create({
          IDProduct,
          IDUser,
          IDPayment: null,
          Quantity: 1
        })
        return res.json(basket)
      } else{
        await ProductPayment.update({
          Quantity: availableProduct.Quantity + 1,
        },
          {
            where: {IDProduct, IDUser}
          })
      }

    } catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
  async getAll(req, res, next){
    try {
      const  {IDUser} = req.query
      const basket = await models.ProductPayment.findAll({
        include: [{
          model: models.User,
          association: 'IDUser_User',
          where: {IDUser}
        },
          {
            model: models.Product,
            association: 'IDProduct_Product'
          }]
      })
      return res.json(basket)
    }
    catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  async getOne(req, res, next){
    try {
      const  {IDUser, IDProduct} = req.query
      const basket = await models.ProductPayment.findOne({
        include: [{
          model: models.User,
          association: 'IDUser_User',
          where: {IDUser}
        },
          {
            model: models.Product,
            association: 'IDProduct_Product',
            where: {IDProduct}
          }]
      })
      return res.json(basket)
    }
    catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}
module.exports = new BasketController()