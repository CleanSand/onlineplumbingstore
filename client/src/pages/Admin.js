import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Dropdown, Row } from 'react-bootstrap'
import CreateProduct from '../components/modals/CreateProduct'
import ProductItem from '../components/ProductItem'
import { Context } from '../index'
import { deleteProduct, fetchProduct, fetchSubcategory } from '../http/productApi'
import { observer } from 'mobx-react-lite'

const Admin = observer( () => {
  const {product} = useContext(Context)

  useEffect(()=>{
    fetchProduct().then(data => product.setProducts(data.rows))
  }, [])

  const btndelete = (e) =>{
    const key = e.target.dataset.key
    const res = deleteProduct(key)
    console.log(key)
  }

  const [productVisible,setProductVisible] = useState(false)
  return (
    <Container className={"d-flex flex-column"}>
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setProductVisible(true)}>Добавить продукт</Button>
      <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
      <Row className="d-flex" >
        {product.products.map( product =>
          <div className="table-product">
            <div>{product.Name}</div>
            <div>{product.InStock}</div>
            <div>{product.Price}</div>
            <div>{product.Price}</div>
            <div>{product.Price}</div>
            <Button>Редактировать</Button>
            <Button onClick={btndelete} data-key={product.IDProduct} key={product.IDProduct}>Удалить</Button>
          </div>
        )}
      </Row>
    </Container>
  );
});

export default Admin