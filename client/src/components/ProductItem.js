import React, {useContext, useEffect, useState} from 'react'
import { Button, Card, Col, Image } from 'react-bootstrap'
import { useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from '../utils/const'
import {addToBasket, createProduct, getOneProductBasket} from '../http/productApi'
import { Context } from '../index'
import data from "bootstrap/js/src/dom/data";

const ProductItem = ({product}) => {
  const navigate = useNavigate()
  const {user} = useContext(Context)
  const [isQuntity, setisQuntity] = useState(false)

  useEffect(() => {
    getOneProductBasket(user.user.IDUser, product.IDProduct).then(data => data ? setisQuntity(true) : setisQuntity(false))
  })

  function btn  () {
    const formData = new FormData();
    formData.append('IDProduct', product.IDProduct);
    formData.append('IDUser', user.user.IDUser);
    addToBasket(formData).then()
    setisQuntity(true)
  }

  return (
      <div style={{width: '25%', display: "table-column", justifyContent: 'center', marginBottom: '20px'}}>
        <div style={{width: 150, cursor:'pointer'}} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.IDProduct)}>
          <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.Image}/>
          <div className="text-product-item">
            <div>{product.Name}</div>
            <div>В наличии: {product.InStock}</div>
            <div>Цена: {product.Price}</div>
          </div>
        </div>
        <Button variant={"outline-dark"} disabled={isQuntity} onClick={btn}>{!isQuntity ? "Добавить в корзину" : "Добавлен в корзину"}</Button>
      </div>
  )
}

export default ProductItem