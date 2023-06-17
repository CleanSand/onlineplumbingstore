import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap'
import { Context } from '../../index'
import { createProduct, updateProduct } from '../../http/productApi'

const UpdateProduct = observer(({ show, onHide }) => {
  const {product} = useContext(Context)

  const [Name, setName] = useState(product.SelectedProduct.Name);
  const [Description, setDescription] = useState(product.SelectedProduct.Name);
  const [Height, setHeight] = useState(product.SelectedProduct.Height);
  const [Weight, setWeight] = useState(product.SelectedProduct.Weight);
  const [Lenght, setLenght] = useState(product.SelectedProduct.Lenght);
  const [Price, setPrice] = useState(product.SelectedProduct.Price);
  const [ProductType, setProductType] = useState(product.SelectedProduct.ProductType);
  const [TypeOfInstallation, setTypeOfInstallation] = useState(product.SelectedProduct.TypeOfInstallation);
  const [Colour, setColour] = useState(product.SelectedProduct.Colour);
  const [DesignStyle, setDesignStyle] = useState(product.SelectedProduct.DesignStyle);
  const [HousingMaterial, setHousingMaterial] = useState(product.SelectedProduct.HousingMaterial);
  const [VendorCode, setVendorCode] = useState(product.SelectedProduct.VendorCode);
  const [InStock, setInStock] = useState(product.SelectedProduct.InStock);
  console.log(product.SelectedProduct.Name)
  const btnUpdateProduct = () => {
    const formData = new FormData();
    formData.append('IDProduct', product.SelectedProduct.IDProduct)
    formData.append('Name', Name);
    formData.append('Price', `${Price}`);
    formData.append('Image', File);
    formData.append('IDSubcategory', product.SelectedSubCategories.IDSubcategory);
    formData.append('Height', Height);
    formData.append('Weight', Weight);
    formData.append('Lenght', Lenght);
    formData.append('ProductType', ProductType);
    formData.append('TypeOfInstallation', TypeOfInstallation);
    formData.append('Description', Description);
    formData.append('Colour', Colour);
    formData.append('DesignStyle', DesignStyle);
    formData.append('HousingMaterial', HousingMaterial);
    formData.append('VendorCode', VendorCode);
    formData.append('InStock', InStock);
    formData.append('IDManufacturer', product.SelectedManufacturers.IDManufacturer);

    for (let pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
    }

    updateProduct(formData).then(data => onHide());
  };
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
        <Button variant="outline-success" onClick={btnUpdateProduct}>
          Редактировать
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default UpdateProduct