import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../../index';
import { updateProduct } from '../../http/productApi';

const UpdateProduct = observer(({ show, onHide }) => {
  const { product } = useContext(Context);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Заполнение полей данными при открытии модального окна
    if (product.SelectedProduct) {
      setName(product.SelectedProduct.Name);
      setDescription(product.SelectedProduct.Description);
      setHeight(product.SelectedProduct.Height);
      setWeight(product.SelectedProduct.Weight);
      setLength(product.SelectedProduct.Length);
      setPrice(product.SelectedProduct.Price);
    }
  }, [product.SelectedProduct]);

  const btnUpdateProduct = () => {
    const updatedProduct = {
      IDProduct: product.SelectedProduct.IDProduct,
      Name: name,
      Description: description,
      Height: height,
      Weight: weight,
      Length: length,
      Price: price,
      // Другие поля товара...
    };

    updateProduct(updatedProduct).then(data => {
      onHide();
      // Дополнительные действия после успешного обновления товара
    });
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
              <Dropdown.Toggle>
                {product.SelectedCategories?.Name || 'Выберите категорию'}
              </Dropdown.Toggle>
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
              <Dropdown.Toggle>
                {product.SelectedSubCategories?.Name || 'Выберите подкатегорию'}
              </Dropdown.Toggle>
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
              <Dropdown.Toggle>
                {product.SelectedManufacturers?.Name || 'Выберите производителя'}
              </Dropdown.Toggle>
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
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-control"
                placeholder="Введите название товара"
            />
            <Form.Control
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="form-control"
                placeholder="Введите описание товара"
            />
            <Form.Control
                value={height}
                onChange={e => setHeight(e.target.value)}
                className="form-control"
                placeholder="Введите высоту"
            />
            <Form.Control
                value={weight}
                onChange={e => setWeight(e.target.value)}
                className="form-control"
                placeholder="Введите вес"
            />
            <Form.Control
                value={length}
                onChange={e => setLength(e.target.value)}
                className="form-control"
                placeholder="Введите длину"
            />
            <Form.Control
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="form-control"
                placeholder="Введите стоимость товара"
                type="number"
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
  );
});

export default UpdateProduct;
