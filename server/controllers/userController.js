const ApiError = require('../error/ApiError')
const {User, ProductPayment} = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Op} = require('sequelize')

const generateJwt = (IDUser, IDRole, Email, PhoneNumber) =>{
    return jwt.sign(
      {IDUser, Email, IDRole, PhoneNumber },
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
    )
}
class UserController{
    async registration(req, res, next){
        try{
            const {LastName, SecondName, FirstName, PhoneNumber, Password, BirthDate, Email, IDRole} = req.body
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
            const user = await User.create({LastName, SecondName, FirstName, PhoneNumber, Password: hashPassword, BirthDate, Email, IDRole})
            const jwttoken = generateJwt(user.IDUser, user.IDRole, user.Email, user.PhoneNumber)
            return res.json({ jwttoken })
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async login(req, res, next){
        try {
            const {Email, Password, PhoneNumber} = req.body

            const whereCondition = {};

            if (PhoneNumber) {
                whereCondition[Op.or] = [{ PhoneNumber: PhoneNumber }];
            }

            if (Email) {
                whereCondition[Op.or] = [{ Email: Email }];
            }
            const user = await User.findOne({ where: whereCondition })
            if (!user){
                return next(ApiError.internal('Пользователь не найден'))
            }
            let comparePassword = bcrypt.compareSync(Password, user.Password)
            if(!comparePassword){
                return next(ApiError.internal('Указан неверный пароль'))
            }
            const token = generateJwt(user.IDUser, user.IDRole, user.Email, user.PhoneNumber)
            return res.json({token})
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async check(req, res, next){
        const token = generateJwt(req.user.IDUser, req.user.IDRole, req.user.PhoneNumber, req.user.Email)
        return res.json({token})
    }
}
module.exports = new UserController()