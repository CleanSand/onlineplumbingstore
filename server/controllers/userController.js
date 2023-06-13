const ApiError = require('../error/ApiError')
const {User, ProductPayment} = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Op} = require('sequelize')

const generateJwt = (IDUser, IDRole, PhoneNumber) =>{
    return jwt.sign(
      {IDUser, IDRole, PhoneNumber },
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
    )
}
class UserController{
    async registration(req, res, next){
        try{
            const {Email, Password, LastName, SecondName, FirstName, BirthDate, PhoneNumber, IDRole} = req.body
            if (!LastName || !FirstName || !PhoneNumber || !Password || !BirthDate || !Email){
                return next(ApiError.badRequest('Данные некоректны'))
            }
            const repeatedEmail = await User.findOne({where: {Email}})
            if (repeatedEmail){
                 return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const repeatedPhoneNumber = await User.findOne({where: {PhoneNumber}})
            if (repeatedPhoneNumber){
                 return next(ApiError.badRequest('Пользователь с таким номером телефона уже существует'))
            }
            const hashPassword = await bcrypt.hash(Password, 5)
            const user = await User.create({Email, Password, LastName, SecondName, FirstName, BirthDate, PhoneNumber, IDRole})
            const token = generateJwt(user.IDUser, user.IDRole, user.PhoneNumber)
            return res.json({ token })

        }catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async login(req, res, next){
        try {
            const {Password, PhoneNumber} = req.body

            const user = await User.findOne({ where: {PhoneNumber} })
            if (!user){
                return next(ApiError.internal('Пользователь не найден'))
            }
            let comparePassword = bcrypt.compareSync(Password, user.Password)
            if(!comparePassword){
                return next(ApiError.internal('Указан неверный пароль'))
            }
            const token = generateJwt(user.IDUser, user.IDRole, user.PhoneNumber)
            return res.json({token})
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async check(req, res, next){
        const token = generateJwt(req.user.IDUser, req.user.IDRole, req.user.PhoneNumber)
        return res.json({token})
    }
}
module.exports = new UserController()