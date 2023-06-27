import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../../index';
import { createProduct, fetchCategory, fetchManufacturer, fetchSubcategory } from '../../http/productApi';
import { observer } from 'mobx-react-lite';

const CreateProduct = observer(({ show, onHide }) => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Height, setHeight] = useState('');
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
  const [File, setFile] = useState(null);
  const { product } = useContext(Context);

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    fetchCategory().then(data => product.setCategories(data));
    fetchManufacturer().then(data => product.setManufacturers(data));
  }, []);
  useEffect(() => {
    fetchSubcategory(product.SelectedCategories.IDCategory).then(data => product.setSubCategories(data));
  }, [product.SelectedCategories]);

  const addProduct = () => {
    const formData = new FormData();

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

    createProduct(formData).then(data => onHide());
  };
  return (
    <Modal show={show} onHide={onHide} centered style={{ zIndex: 9999 }}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить товар
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
            placeholder="Введите количество товара в наличие товара"
          />
          <Form.Control className="form-control" type="file" onChange={selectFile} />
          <hr />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addProduct}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProduct;
