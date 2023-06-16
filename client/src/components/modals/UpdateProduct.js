import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap'
import { fetchCategory, fetchManufacturer, fetchSubcategory } from '../../http/productApi'
import { Context } from '../../index'

const UpdateProduct = observer(({ show, onHide }) => {
  const {product} = useContext(Context)

  const [Name, setName] = useState(product.SelectedProduct.Name);
  const [Description, setDescription] = useState(product.SelectedProduct.Name);
  const [Height, setHeight] = useState(product.SelectedProduct.Height);
  const [Weight, setWeight] = useState('');
  const [Lenght, setLenght] = useState('');
  const [Price, setPrice] = useState();
  const [ProductType, setProductType] = useState('');
  const [TypeOfInstallation, setTypeOfInstallation] = useState('');
  const [Colour, setColour] = useState('');
  const [DesignStyle, setDesignStyle] = useState('');
  const [HousingMaterial, setHousingMaterial] = useState('');
  const [VendorCode, setVendorCode] = useState('');
  const [InStock, setInStock] = useState('');

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Изменить товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="dropdown-modal">
            <Dropdown.Toggle>{product.SelectedCategories.Name || 'Выберите категорию'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.categories.map(category => (
                <Dropdown.Item
                  onClick={() => product.setSelectedCategories(category)}
                  key={category.IDCategory}
                >
                  {category.Name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="dropdown-modal">
            <Dropdown.Toggle>{product.SelectedSubCategories.Name || 'Выберите подкатегорию'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.subcategories.map(subcategory => (
                <Dropdown.Item
                  onClick={() => product.setSelectedSubCategories(subcategory)}
                  key={subcategory.IDSubcategory}
                >
                  {subcategory.Name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="dropdown-modal">
            <Dropdown.Toggle>{product.SelectedManufacturers.Name || 'Выберите производителя'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.manufacturers.map(manufacturer => (
                <Dropdown.Item
                  onClick={() => product.setSelectedManufacturers(manufacturer)}
                  key={manufacturer.IDManufacturer}
                >
                  {manufacturer.Name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={Name}
            onChange={e => setName(e.target.value)}
            className="form-control"
            placeholder="Введите название товара"
          />
          <Form.Control
            value={Description}
            onChange={e => setDescription(e.target.value)}
            className="form-control"
            placeholder="Введите описание товара"
          />
          <Form.Control
            value={Height}
            onChange={e => setHeight(e.target.value)}
            className="form-control"
            placeholder="Введите высоту"
          />
          <Form.Control
            value={Weight}
            onChange={e => setWeight(e.target.value)}
            className="form-control"
            placeholder="Введите вес"
          />
          <Form.Control
            value={Lenght}
            onChange={e => setLenght(e.target.value)}
            className="form-control"
            placeholder="Введите длину"
          />
          <Form.Control
            value={Price}
            onChange={e => setPrice(Number(e.target.value))}
            className="form-control"
            placeholder="Введите стоимость товара"
            type="number"
          />
          <Form.Control
            value={ProductType}
            onChange={e => setProductType(e.target.value)}
            className="form-control"
            placeholder="Введите тип товара"
          />
          <Form.Control
            value={TypeOfInstallation}
            onChange={e => setTypeOfInstallation(e.target.value)}
            className="form-control"
            placeholder="Введите тип инсталляции"
          />
          <Form.Control
            value={Colour}
            onChange={e => setColour(e.target.value)}
            className="form-control"
            placeholder="Введите цвет"
          />
          <Form.Control
            value={DesignStyle}
            onChange={e => setDesignStyle(e.target.value)}
            className="form-control"
            placeholder="Введите стиль дизайна"
          />
          <Form.Control
            value={HousingMaterial}
            onChange={e => setHousingMaterial(e.target.value)}
            className="form-control"
            placeholder="Введите материал корпуса"
          />
          <Form.Control
            value={VendorCode}
            onChange={e => setVendorCode(e.target.value)}
            className="form-control"
            placeholder="Введите артикул товара"
          />
          <Form.Control
            value={InStock}
            onChange={e => setInStock(e.target.value)}
            className="form-control"
            placeholder="Введите наличие товара"
          />
          <hr />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default UpdateProduct