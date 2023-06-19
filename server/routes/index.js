const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const subcategoryRouter = require('./subcategoryRouter')
const manufacturerRouter = require('./manufacturerRouter')
const basketRouter = require('./basketRouter')


router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/subcategory', subcategoryRouter)
router.use('/manufacturer', manufacturerRouter)
router.use('/basket', basketRouter)


module.exports = router