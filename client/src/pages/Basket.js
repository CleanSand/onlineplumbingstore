import React, {useContext, useEffect} from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import ProductItem from '../components/ProductItem'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import {
  createPayment, deleteFromBasket,
  deleteProduct,
  getAllProductBasket,
  minusQuantityBasket,
  plusQuantityBasket
} from '../http/productApi'
import {queryAllByAltText} from "@testing-library/react";

const Basket = observer(() => {
  const {product, user} = useContext(Context)
  const quantityDoc = document.getElementById('totalQuantity')
  const costDoc = document.getElementById('totalCost')

  function setTotalQuantity() {
    const products = document.querySelectorAll('#products .quantity')
    let result = 0;
    products.forEach(el => result += +el.innerHTML)

    return result
  }

  function setTotalCost() {
    const products = document.querySelectorAll('#products .price')
    const mn = document.querySelectorAll('#products .quantity')
    let mas = []
    let result = 0;

    mn.forEach(el => mas.push(+el.innerHTML))
    products.forEach((el, index) => result += (+el.innerHTML * mas[index]))

    return result
  }

  function setCard() {
    quantityDoc.innerHTML = "Количество: " + setTotalQuantity().toString()
    costDoc.innerHTML = "Стоимость: " + setTotalCost().toString() + " ₽"
  }

   function plus (e, key) {
    const amount = +document.getElementById(key).innerHTML
    if (amount >= 100)
      return document.getElementById(key).innerHTML = amount.toString()

    const formData = new FormData();
    formData.append('IDProduct', key);
    formData.append('IDUser', user.user.IDUser);
    plusQuantityBasket(formData).then()
    document.getElementById(key).innerHTML = (amount + 1).toString()
    setCard()
  }

  function minus (e, key) {
    const amount = +document.getElementById(key).innerHTML
    if (amount <= 1)
      return document.getElementById(key).innerHTML = amount.toString()

    const formData = new FormData();
    formData.append('IDProduct', key);
    formData.append('IDUser', user.user.IDUser);
    minusQuantityBasket(formData).then()
    document.getElementById(key).innerHTML = (amount - 1).toString()
    quantityDoc.innerHTML = "Количество " + setTotalQuantity().toString()
    setCard()
  }
  function btnDeleteFromBasket  (e, key) {

    const formData = new FormData();
    formData.append('IDProduct', key);
    formData.append('IDUser', user.user.IDUser);

    deleteFromBasket(formData).then()
  }

  const payment = () =>  {
    const formData = new FormData();
    formData.append('IDUser', user.user.IDUser);
    formData.append('FinalPrice', totalCost);
    formData.append('FinalQuantity', totalQuantity);
    createPayment(formData).then()
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
          <div id={'products'} className={"d-flex flex-wrap"} style={{width: "70%"}}>
            {product.basket.map((basket) => (
              <div className="m-3" key={basket.IDProduct_Product.IDProduct}>
                <div className="card" style={{width: "16rem", height: "100%"}}>
                  <Image className="card-img-top" src={process.env.REACT_APP_API_URL + basket.IDProduct_Product.Image} alt="Card image cap"/>
                    <div className="d-flex flex-column justify-content-between card-body">
                      <h5 className="card-title">{basket.IDProduct_Product.Name}</h5>
                      <p className={'price'}>{basket.IDProduct_Product.Price}</p>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={(e) => minus(e, basket.IDProduct)} type="button" className="btn btn-secondary">-</button>
                        <button id={basket.IDProduct} disabled={true} type="button" className="btn btn-secondary quantity">{basket.Quantity}</button>
                        <button onClick={(e) => plus(e, basket.IDProduct)} type="button" data-key={basket.IDProduct} className="btn btn-secondary">+</button>
                      </div>
                      <button type="button"onClick={(e) => btnDeleteFromBasket(e, basket.IDProduct)} className="mt-3 btn btn-danger">Удалить</button>
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
                <h5 id={'totalCost'} className="card-title">Стоимость: {totalCost} ₽</h5>
                <p id={'totalQuantity'} className="card-text">Количество {totalQuantity}</p>
                <button onClick={payment} style={{width: '100%'}} className="btn btn-secondary">Перейти к оплате</button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </section>
  );
});

export default Basket