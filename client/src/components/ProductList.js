import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { Row } from 'react-bootstrap'
import ProductItem from './ProductItem'

const ProductList = observer( () => {
  const {product} = useContext(Context)
  return (
      <div className="prod-list" >
          {product.products.map( product =>
              <ProductItem key={product.id} product={product}/>
          )}
      </div>
  )
})

export default ProductList