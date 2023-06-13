const { Subcategory } = require('../models/index')
const ApiError = require('../error/ApiError')
const { Category } = require('../models')

class SubcategoryController {
  async  create(req, res, next){
    try{
      const {Name} = req.body
      const subcategory = await Subcategory.create({Name})
      return res.json(subcategory)
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
  async  getAll(req,res){
    const subcategory = await Subcategory.findAll()
    return res.json(subcategory)
  }
}

module.exports = new SubcategoryController()