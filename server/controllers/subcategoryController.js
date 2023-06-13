const { Subcategory } = require('../models/index')
const ApiError = require('../error/ApiError')
const { Category } = require('../models')
const {initModels} = require('../models/init-models')

const sequelize = require('../db')
const models = initModels(sequelize)

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
    let {IDCategory} = req.query
    let subcategory;
    if(!IDCategory){
      subcategory = await models.Subcategory.findAll()
    }
    if(IDCategory){
      subcategory = await models.Subcategory.findAll({
        include: [{
          model: models.CategorySubcategory,
          association: 'CategorySubcategories',
          where: {IDCategory: IDCategory},
          include: [{
            model: models.Category,
            association: 'IDCategory_Category'
          }]
        }]
      })
    }


    return res.json(subcategory)
  }
}

module.exports = new SubcategoryController()