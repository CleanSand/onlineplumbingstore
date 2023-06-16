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
      <table className={'table-product'}>
          <tr>
              <th>Наименование</th>
              <th>Количество</th>
              <th>Тип</th>
              <th>Цвет</th>
              <th>Цена</th>
              <th>Редактировать / Удалить</th>
          </tr>
          {product.products.map( product =>
              <tr className="table-line">
                  <td>{product.Name}</td>
                  <td>{product.InStock}</td>
                  <td>{product.ProductType}</td>
                  <td>{product.Colour}</td>
                  <td>{product.Price}</td>
                  <td className={'d-flex justify-content-between'}>
                      <button className={'btn btn-outline-dark'} style={{margin: '0 5px'}}>Редактировать</button>
                      <button className={'btn btn-outline-danger'} onClick={btndelete} data-key={product.IDProduct} key={product.IDProduct}>Удалить</button>
                  </td>
              </tr>
          )}
      </table>
    </Container>
  );
});

export default Admin