import React, { useContext } from 'react'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap'
import { Context } from '../../index'

const CreateProduct = ({ show, onHide }) => {
  const {product} = useContext(Context)
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className={"dropdown-modal"}>
            <Dropdown.Toggle>Выберите категорию</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.categories.map(category =>
                <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={"dropdown-modal"}>
            <Dropdown.Toggle>Выберите подкатегорию</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.subcategories.map(subcategories =>
                <Dropdown.Item key={subcategories.id}>{subcategories.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className={"form-control"}
            placeholder={"Введите название товара"}
          />
          <Form.Control
            className={"form-control"}
            placeholder={"Введите описание товара"}
          />
          <Form.Control
            className={"form-control"}
            placeholder={"Введите высоту"}
          />
          <Form.Control
            className={"form-control"}
            placeholder={"Введите ширину"}
          />
          <Form.Control
            className={"form-control"}
            placeholder={"Введите длину"}
          />
          <Form.Control
            className={"form-control"}
            placeholder={"Введите вид товара"}
          />
        <Form.Control
            className={"form-control"}
            placeholder={"Введите тип инсталяции"}
        />
        <Form.Control
            className={"form-control"}
            placeholder={"Введите цвет"}
          />
        <Form.Control
            className={"form-control"}
            placeholder={"Введите стиль дизайна"}
          />
        <Form.Control
            className={"form-control"}
            placeholder={"Введите основной материал"}
          />
        <Form.Control
            className={"form-control"}
            placeholder={"Введите стоимость товара"}
            type="number"
          />
        <Form.Control
            className={"form-control"}
            type="file"
          />
          <hr/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateProduct