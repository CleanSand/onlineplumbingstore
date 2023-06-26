const { ProductPayment, User } = require('../models')
const ApiError = require('../error/ApiError')
const {initModels} = require('../models/init-models')

const sequelize = require('../db')
const models = initModels(sequelize)
class BasketController {
  async add(req,res, next){
    try{
      const {IDProduct, IDUser} = req.body
      const availableProduct = await ProductPayment.findOne({ where: {IDUser, IDProduct, IDPayment: null} })
      if(!availableProduct){
        const basket = await ProductPayment.create({
          IDProduct,
          IDUser,
          IDPayment: null,
          Quantity: 1
        })
        return res.json(basket)
      }else{
        return res.json("Уже присутствует в корзине")
      }
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
  async getAll(req, res, next){
    try {
      const  {IDUser} = req.query
      const basket = await models.ProductPayment.findAll({
      where: {IDPayment: null},
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
        where: {IDPayment: null},
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
  async PlusQuantity(req, res, next){
    try {
      const  {IDUser, IDProduct} = req.body
      const availableProduct = await ProductPayment.findOne({ where: {IDUser, IDProduct, IDPayment: null} })
      const qwe = await ProductPayment.update({
          Quantity: availableProduct.Quantity + 1,
        },
        {
          where: {IDUser, IDProduct, IDPayment: null}
        })
      return res.json(qwe)
    }
    catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  async MinusQuantity(req, res, next){
    try {
      const  {IDUser, IDProduct} = req.body
      const availableProduct = await ProductPayment.findOne({ where: {IDUser, IDProduct, IDPayment: null} })
      if (availableProduct.Quantity > 1){
        await ProductPayment.update({
            Quantity: availableProduct.Quantity - 1,
          },
          {
            where: {IDProduct, IDUser, IDPayment: null}
          })
        return res.json("Успешно")
      }else{
        return res.json("Не возможно уменьшить кол-во")
      }
    }
    catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  async DeleteFromBasket(req, res, next){
    try {
      const  {IDUser, IDProduct} = req.query
      const del = await ProductPayment.destroy({
        where: {IDProduct, IDUser, IDPayment: null}
      })
      return res.json(del)
    }
    catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}
module.exports = new BasketController()