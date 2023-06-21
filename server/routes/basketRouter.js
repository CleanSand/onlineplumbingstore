const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', basketController.add)
router.patch('/plus-quantity', basketController.PlusQuantity)
router.patch('/minus-quantity', basketController.MinusQuantity)
router.delete('/delete', basketController.DeleteFromBasket)
router.get('/get-all', basketController.getAll)
router.get('/get-one', basketController.getOne)

module.exports = router