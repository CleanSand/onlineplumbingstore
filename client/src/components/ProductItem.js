import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from '../utils/const'

const ProductItem = ({product}) => {
  const navigate = useNavigate()
  return (
    <Col className={"prod-list"} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.IDProduct)}>
      <div style={{width: 150, cursor:'pointer'}}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.Image}/>
        <div className="text-product-item">
          <div>{product.Name}</div>
          <div>В наличии: {product.InStock}</div>
          <div>Цена: {product.Price}</div>
        </div>
      </div>
    </Col>
  )
}

export default ProductItem