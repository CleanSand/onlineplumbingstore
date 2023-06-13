const Router = require('express')
const router = new Router()
const subcategoryController = require('../controllers/subcategoryController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', subcategoryController.create, checkRole(1))
router.get('/', subcategoryController.getAll)

module.exports = router