import React, { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import { fetchOneProduct } from '../http/productApi'
import { observer } from 'mobx-react-lite'
const ProductPage = observer(() => {
  const { id } = useParams()
  const [products, setProducts] = useState({})

  useEffect(() =>{
    fetchOneProduct(id).then(data => setProducts(data.data))
  }, [])

  console.log(products)
  return (
      <section>
        <Container>
          <div className={"d-flex product-card"}>
            <div className={'product-img'}>
              <div className={'image-product_box'}>
                <Image src={process.env.REACT_APP_API_URL + products.Image} className={'image-product'}/>
              </div>
              <div className={'product-price'}>
                <div>
                  <h3>От {products.Price} Руб.</h3>
                  <h3>В наличии: {products.InStock}</h3>
                </div>

                <button className={'btn btn-dark'}>Добавить в корзину</button>
              </div>
            </div>
            <div className={"prod-description"}>
              <h1>{products.Name}</h1>
              <p>Описание: {products.Description}</p>
              <p>Высота: {products.Weight}</p>
              <p>Ширина: {products.Height}</p>
              <p>Длина: {products.Lenght}</p>
              <p>Вид: {products.ProductType}</p>
              <p>Тип инсталяции: {products.TypeOfInstallation}</p>
              <p>Цвет: {products.Colour}</p>
              <p>Стиль дизайна: {products.DesignStyle}</p>
              <p>Основной материал: {products.HousingMaterial}</p>
            </div>
          </div>
        </Container>
      </section>
  );
});

export default ProductPage