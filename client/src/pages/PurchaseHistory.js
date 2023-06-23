import React, {useContext, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Context } from '../index'
import {getAllHistory} from "../http/productApi";
import {useNavigate} from "react-router-dom";
import {HISTORY_PRODUCT_PAGE, PRODUCT_ROUTE} from "../utils/const";

const PurchaseHistory = () => {
  const {product, user} = useContext(Context)
    const navigate = useNavigate()

    async function getHistory() {
      await getAllHistory(user.user.IDUser).then(data => product.setHistoryProduct(data));
    }

    useEffect(() => {
        getHistory()
    })

  return (
    <section>
      <Container>
          <h1>История заказов</h1>
          <div className={'d-flex flex-wrap my-3'}>
              {
                  product.historyProduct.map((order) =>
                      <div onClick={() => navigate(HISTORY_PRODUCT_PAGE + '/' + order.IDPayment)} className="card card_history" style={{width: '300px', margin: '0 10px 10px 0'}}>
                          <div className="card-header">
                              Номер заказа #{order.IDPayment}
                          </div>
                          <div className="card-body">
                              <h5 className="card-title">Итоговая стоимость: {order.FinalPrice}</h5>
                              <p className="card-text">Количество: {order.FinalQuantity}</p>
                          </div>
                      </div>
                  )
              }

          </div>
      </Container>
    </section>
  )
}

export default PurchaseHistory