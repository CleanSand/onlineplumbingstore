const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', basketController.add)
router.get('/', basketController.getAllBasket)

module.exports = router