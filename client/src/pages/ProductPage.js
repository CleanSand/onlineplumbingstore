import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
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
      <Container className={"d-flex"}>
        <Col md ={4} >
          <img  style={{width: "100%", height: "auto"}}  src={product.Image} alt={""}/>
        </Col>
        <Col md ={4} style={{width: "80%", padding: "100px"}}>
          <Row className={"prod-description"}>
            <h1>{product.Name}</h1>
            <p>Высота: {product.Weight}</p>
            <p>Ширина: {product.Height}</p>
            <p>Длинна: {product.Lenght}</p>
            <p>Вид: {product.ProductType}</p>
            <p>Тип инсталяции: {product.TypeOfInstallation}</p>
            <p>Цвет: {product.Colour}</p>
            <p>Стиль дизайна: {product.DesignStyle}</p>
            <p>Основной материал: {product.HousingMaterial}</p>

          </Row>
        </Col>

      </Container>
      <Container>
        <Col md ={4}>
          <Card
            className={"d-flex flex-column align-items-center justify-content-around"}
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
            <h1>От: {product.Price} руб.</h1>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Container>
    </section>
  );
};

export default ProductPage