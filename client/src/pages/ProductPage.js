import React from 'react'
import { Container } from 'react-bootstrap'
import qwe from "../092efa65-56b4-4bbc-b102-bd188210b619.jpg"
const ProductPage = () => {
  const product = {IDProduct: 13,
    Name: "Hansgrohe Rebris",
    Weight: "-",
    Height: "222 мм",
    Lenght: "154мм",
    Description: "Высокий смеситель для раковины (чёрный матовый)",
    Price: "27646",
    ProductType: "Смеситель для раковины",
    TypeOfInstallation: "На одно отверстие",
    Colour: "Чёрный",
    DesignStyle: "Современный",
    HousingMaterial: "Металл",
    VendorCode: "24952370000",
    InStock: 10,
    IDManufacturer: 4,
    Image: "../092efa65-56b4-4bbc-b102-bd188210b619.jpg"}
  return (
      <section>
        <Container>
          <div className={"d-flex product-card"}>
            <div className={'product-img'}>
              <div className={'image-product_box'}>
                <img src={qwe} alt={''} className={'image-product'}/>
              </div>
              <div className={'product-price'}>
                <div>
                  <h3>От {product.Price} Руб.</h3>
                  <h3>В наличии: {product.InStock}</h3>
                </div>

                <button className={'btn btn-dark'}>Добавить в корзину</button>
              </div>
            </div>
            <div className={"prod-description"}>
              <h1>{product.Name}</h1>
              <p>Описание: {product.Description}</p>
              <p>Высота: {product.Weight}</p>
              <p>Ширина: {product.Height}</p>
              <p>Длина: {product.Lenght}</p>
              <p>Вид: {product.ProductType}</p>
              <p>Тип инсталяции: {product.TypeOfInstallation}</p>
              <p>Цвет: {product.Colour}</p>
              <p>Стиль дизайна: {product.DesignStyle}</p>
              <p>Основной материал: {product.HousingMaterial}</p>
            </div>
          </div>
        </Container>
      </section>
  );
};

export default ProductPage