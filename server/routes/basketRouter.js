const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', basketController.add)
router.get('/get-all', basketController.getAll)
router.get('/get-one', basketController.getOne)

module.exports = router