const {Payment, ProductPayment} = require('../models/index')
const ApiError = require('../error/ApiError')
class paymentController {
  async  create(req,res, next){
    try{
      const {FinalPrice,FinalQuantity, IDUser} = req.body

      const payment = await Payment.create({
        FinalPrice,
        FinalQuantity,
        PurchaseDate: Date.now()

      })
      const productPayment = await ProductPayment.update({
        IDPayment: payment.IDPayment
      },
        {
          where: { IDPayment: null, IDUser}
        })
      return res.json(productPayment)
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new paymentController()