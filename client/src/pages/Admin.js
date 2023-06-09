import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateProduct from '../components/modals/CreateProduct'

const Admin = () => {
  const [productVisible,setProductVisible] = useState(false)
  return (
    <Container className={"d-flex flex-column"}>
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setProductVisible(true)}>Добавить продукт</Button>
      <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
    </Container>
  );
};

export default Admin