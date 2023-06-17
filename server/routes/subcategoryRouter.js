const Router = require('express')
const router = new Router()
const subcategoryController = require('../controllers/subcategoryController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/',checkRole(1), subcategoryController.create)
router.get('/', subcategoryController.getAll)

module.exports = router