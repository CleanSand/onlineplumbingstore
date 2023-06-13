const {Category} = require('../models/index')
const ApiError = require('../error/ApiError')
class CategoryControllerController {
  async  create(req,res, next){
    try{
      const {Name} = req.body
      const category = await Category.create({Name})
      return res.json(category)
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
  async  getAll(req,res){
    const category = await Category.findAll()
    return res.json(category)
  }
}

module.exports = new CategoryControllerController()