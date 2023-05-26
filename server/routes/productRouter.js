const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole(1), productController.create)
router.get('/', productController.getAll)
router.get('/:IDProduct', productController.getOne)

module.exports = router