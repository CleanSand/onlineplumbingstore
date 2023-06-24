const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.delete('/:IDProduct', checkRole(1), productController.delete)
router.post('/', checkRole(1), productController.create )
router.patch('/', checkRole(1), productController.update)
router.get('/', productController.getAll)
router.get('/:IDProduct', productController.getOne)

module.exports = router