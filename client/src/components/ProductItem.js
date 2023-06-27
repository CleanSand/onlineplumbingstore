import React, {useContext, useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import { addToBasket, deleteFromBasket, getOneProductBasket } from '../http/productApi'
import { Context } from '../index'
import {useNavigate} from "react-router-dom";
import { PRODUCT_ROUTE} from "../utils/const";

const ProductItem = ({product}) => {
  const {user} = useContext(Context)
  const [isQuntity, setisQuntity] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getOneProductBasket(user.user.IDUser, product.IDProduct).then(data => data ? setisQuntity(true) : setisQuntity(false))
  }, [product, user])

  async function btnAddInBasket() {
    const formData = new FormData();

    formData.append('IDProduct', product.IDProduct);
    formData.append('IDUser', user.user.IDUser);

    await addToBasket(formData);
    setisQuntity(true);
  }
  async function btnDeleteFromBasket() {

    await deleteFromBasket(product.IDProduct, user.user.IDUser);
    setisQuntity(false);
  }

  return (
        <div  className="card my-3" style={{width: "400px"}}>
          <div className="row g-0" onClick={() => navigate(PRODUCT_ROUTE + '/' + product.IDProduct)} style={{cursor: "pointer"}}>
            <div className="col-md-4">
              <img src={process.env.REACT_APP_API_URL + product.Image} style={{maxWidth: "100%", height: "auto", maxHeight: "120px", padding: "5px", borderRadius: '20px'}} className="rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title product-name">{product.Name}</h5>
                <p style={{padding: "0", margin: "0"}}  className="card-text">В наличии: {product.InStock}</p>
                <p style={{padding: "0", margin: "0"}} className="card-text">Цена: {product.Price} ₽</p>
              </div>
            </div>
          </div>
          {!isQuntity ? <Button variant={"outline-dark"} onClick={btnAddInBasket}>Добавить в корзину</Button>
            :
            <Button variant={"outline-dark"} onClick={btnDeleteFromBasket}>Удалить из корзины</Button>
          }
        </div>
  )
}

export default ProductItem