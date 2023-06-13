const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', categoryController.create, checkRole(1))
router.get('/', categoryController.getAll)

module.exports = router