const { ProductPayment, User } = require('../models')
const ApiError = require('../error/ApiError')

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
  async getAllBasket(req, res, next){
    try {
      const {IDUser} = req.body
      const basket = await ProductPayment.findAll({
        where: { IDUser, IDPayment: null }
      })
      return res.json(basket)
    }
    catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}
module.exports = new BasketController()