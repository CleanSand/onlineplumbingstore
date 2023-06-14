const Router = require('express')
const router = new Router()
const manufacturerController = require('../controllers/manufacturerController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', manufacturerController.create, checkRole(1))
router.get('/', manufacturerController.getAll)

module.exports = router