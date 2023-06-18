const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.patch('/', userController.update)
router.patch('/changePassword', userController.passwordChange)
router.get('/auth', authMiddleware, userController.check)

module.exports = router