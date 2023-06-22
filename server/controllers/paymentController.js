const {Payment, ProductPayment} = require('../models/index')
const ApiError = require('../error/ApiError')
const {initModels} = require('../models/init-models')

const sequelize = require('../db')
const models = initModels(sequelize)
class paymentController {
  async  create(req,res, next){
    try{
      const {FinalPrice,FinalQuantity, IDUser} = req.body
      const finderProductPayment = ProductPayment.findAll({where:{IDUser, IDPayment: null}})
      if (finderProductPayment){
        const payment = await Payment.create({
          FinalPrice,
          FinalQuantity,
          PurchaseDate: Date.now(),
        })
        const productPayment = await ProductPayment.update({
            IDPayment: payment.IDPayment
          },
          {
            where: { IDPayment: null, IDUser}
          })
        return res.json(productPayment)
      }else{
        return res.json("Ошибка")
      }
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
  async  getHistory(req,res, next){
    try{
      const {IDUser} = req.query
      const payment = await models.Payment.findAll({
        include: [{
          model: models.ProductPayment,
          association: 'ProductPayments',
          where: { IDUser }
        }]
      });
      return res.json(payment)
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new paymentController()