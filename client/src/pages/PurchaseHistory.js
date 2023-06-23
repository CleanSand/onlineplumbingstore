import React, {useContext, useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import { Context } from '../index'
import {fetchProduct, getAllHistory} from "../http/productApi";
import {useNavigate} from "react-router-dom";
import OrderHistory from "../components/modals/OrderHistory";

const PurchaseHistory = () => {
    const {product, user} = useContext(Context)
    const [openModal, setOpenModal] = useState(false)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    function openOrder(product) {
        setOpenModal(true)
        setProducts(product)
    }

    async function getHistory() {
        setIsLoading(true);
        await getAllHistory(user.user.IDUser).then((data) => {
            product.setHistoryProduct(data);
            setIsLoading(false);
        });
        console.log(product.historyProduct);
    }


    useEffect(() => {
        getHistory();
    }, []);


        return (
    <section>
        <div onClick={() => setOpenModal(false)} className={'modal_order-wrapper'} hidden={!openModal}>
            <OrderHistory order={products} />
        </div>
      <Container>
          <h1>История заказов</h1>
          <div className={'d-flex flex-wrap my-3'}>
              {
                  product.historyProduct.map((order) =>
                      <div onClick={() => openOrder(JSON.parse(JSON.stringify(order.ProductPayments)))} className="card card_history" style={{width: '300px', margin: '0 10px 10px 0'}}>
                          <div className="card-header">
                              Номер заказа #{order.IDPayment}
                          </div>
                          <div className="card-body">
                              <h5 className="card-title">Итого: {order.FinalPrice}</h5>
                              <p className="card-text">Количество: {order.FinalQuantity}</p>
                              <p className="card-text">Дата покупки: {order.PurchaseDate}</p>
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