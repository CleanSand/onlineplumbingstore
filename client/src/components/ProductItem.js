import React, {useContext, useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import { addToBasket, deleteFromBasket, getOneProductBasket } from '../http/productApi'
import { Context } from '../index'

const ProductItem = ({product}) => {
  const {user} = useContext(Context)
  const [isQuntity, setisQuntity] = useState(false)

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
        <div className="card m-3" style={{maxWidth: "400px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={process.env.REACT_APP_API_URL + product.Image} style={{maxWidth: "100px", height: "auto"}} className="rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title product-name">{product.Name}</h5>
                <p style={{padding: "0", margin: "0"}}  className="card-text">В наличии: {product.InStock}</p>
                <p style={{padding: "0", margin: "0"}} className="card-text">Цена: {product.Price} ₽</p>
              </div>
            </div>
            {!isQuntity ? <Button variant={"outline-dark"} onClick={btnAddInBasket}>Добавить в корзину</Button>
                :
                <Button variant={"outline-dark"} onClick={btnDeleteFromBasket}>Удалить из корзины</Button>
            }
          </div>
        </div>
  )
}

export default ProductItem