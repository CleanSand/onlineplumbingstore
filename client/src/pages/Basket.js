import React, {useContext, useEffect} from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import ProductItem from '../components/ProductItem'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import {plusQuantityBasket} from "../http/productApi";

const Basket = observer(() => {
  const {product, user} = useContext(Context)

  async function add(id) {
    await plusQuantityBasket(id, user.user.IDUser)
  }

  const totalCost = product.basket.reduce((total, basket) => {
    const price = parseFloat(basket.IDProduct_Product.Price);
    const quantity = parseFloat(basket.Quantity);
    return total + (price * quantity);
  }, 0);

  const totalQuantity = product.basket.reduce((total, basket) => {
    return total + parseFloat(basket.Quantity);
  }, 0);

  product.basket.forEach(item => {
    console.log(item.IDProduct_Product);
  });
  return (
    <section className="d-flex">
      {product.basket.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <Container className={'d-flex justify-content-between'}>
          <div className={"d-flex flex-wrap"} style={{width: "70%"}}>
            {product.basket.map((basket) => (
              <div className="m-3" key={basket.IDProduct_Product.IDProduct}>
                <div className="card" style={{width: "16rem", height: "100%"}}>
                  <Image className="card-img-top" src={process.env.REACT_APP_API_URL + basket.IDProduct_Product.Image} alt="Card image cap"/>
                    <div className="d-flex flex-column justify-content-between card-body">
                      <h5 className="card-title">{basket.IDProduct_Product.Name}</h5>
                      <p>{basket.IDProduct_Product.Price} ₽</p>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" disabled={basket.Quantity <= 1} className="btn btn-secondary">-</button>
                        <button disabled={true} type="button" className="btn btn-secondary">{basket.Quantity}</button>
                        <button onClick={add(basket.IDProduct_Product.IDProduct)} type="button" disabled={basket.Quantity >= 9} className="btn btn-secondary">+</button>
                      </div>
                      <button type="button" className="mt-3 btn btn-danger">Удалить</button>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <div className={"mt-3"} style={{width: "30%"}}>
            <div className="card">
              <div className="card-header">
                Оплата заказа
              </div>
              <div className="card-body">
                <h5 className="card-title">Стоимость: {totalCost} ₽</h5>
                <p className="card-text">Количество {totalQuantity}</p>
                <button style={{width: '100%'}} className="btn btn-secondary">Перейти к оплате</button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </section>
  );
});

export default Basket