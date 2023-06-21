import React, { useContext } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import ProductItem from '../components/ProductItem'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

const Basket = observer(() => {
  const {product} = useContext(Context)

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
        <>
          <Container>
            <div>
              {product.basket.map((basket) => (
                <div className="mb-4" key={basket.IDProduct_Product.IDProduct}>
                  <Card className="card-basket">
                    <div className="basket-item">
                      <Image src={process.env.REACT_APP_API_URL + basket.IDProduct_Product.Image} className="image-basket" />
                      <h6 className="basket-item-name">{basket.IDProduct_Product.Name}</h6>
                    </div>
                    <div className="basket-item-details">
                      <div className="d-flex">
                        <button>+</button>
                        <h4 className="mx-3">{basket.Quantity}</h4>
                        <button>-</button>
                      </div>
                      <button>Удалить</button>
                    </div>
                    <div>{basket.IDProduct_Product.Price} ₽</div>
                  </Card>
                </div>
              ))}
            </div>
          </Container>
          <Container>
            <div>
              <Card className="w-75 h-50">
                Итого: Количество {totalQuantity} Стоимость: {totalCost} ₽
              </Card>
            </div>
          </Container>
        </>
      )}
    </section>
  );
});

export default Basket