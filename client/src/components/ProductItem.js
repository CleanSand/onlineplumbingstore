import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from '../utils/const'

const ProductItem = ({product}) => {
  const navigate = useNavigate()
  return (
    <Col className={"prod-list"} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.IDProduct)}>
      <Card style={{width: 150, cursor:'pointer'}}>
        <Image width={150} height={150} src={product.Image}/>
        <div className="text-black-50">
          <div>123</div>
          <div>
            <div>{product.InStock}</div>
          </div>
        </div>
        <div>{product.Name}</div>
      </Card>
    </Col>
  )
}

export default ProductItem