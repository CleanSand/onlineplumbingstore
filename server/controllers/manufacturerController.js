const {Manufacturer} = require('../models/index')
const ApiError = require('../error/ApiError')
class ManufacturerController {
  async  create(req,res, next){
    try{
      const {Name, Country} = req.body
      const manufacturer = await Manufacturer.create({Name, Country})
      return res.json(manufacturer)
    } catch (e){
      next(ApiError.badRequest(e.message))
    }
  }
  async  getAll(req,res){
    const manufacturer = await Manufacturer.findAll()
    return res.json(manufacturer)
  }
}

module.exports = new ManufacturerController()