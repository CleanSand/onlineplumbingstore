import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Dropdown, Row } from 'react-bootstrap'
import CreateProduct from '../components/modals/CreateProduct'
import ProductItem from '../components/ProductItem'
import { Context } from '../index'
import { deleteProduct, fetchCategory, fetchOneProduct, fetchProduct, fetchSubcategory } from '../http/productApi'
import { observer } from 'mobx-react-lite'
import UpdateProduct from '../components/modals/UpdateProduct'

const Admin = observer( () => {
  const {product} = useContext(Context)

  // useEffect(()=>{
  //   fetchProduct().then(data => product.setProducts(data.rows))
  // }, [])

  const btndelete = (e) =>{
    const key = e.target.dataset.key
    const res = deleteProduct(key)
    console.log(key)
  }
  async function btnchange (e){
    const key = e.target.dataset.key
    const res  =  await fetchOneProduct(key)
    product.setSelectedProduct(res.data)
    setUpdateProductVisible(true)
  }

  const [CreateProductVisible,setCreateProductVisible] = useState(false)
  const [UpdateProductVisible,setUpdateProductVisible] = useState(false)
  return (
    <Container className={"d-flex flex-column"}>
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setCreateProductVisible(true)}>Добавить продукт</Button>
      <CreateProduct show={CreateProductVisible} onHide={() => setCreateProductVisible(false)}/>
      <table className={'table-product'}>
          <thead>
              <tr>
                  <th>Наименование</th>
                  <th>Количество</th>
                  <th>Тип</th>
                  <th>Цвет</th>
                  <th>Цена</th>
                  <th>Редактировать / Удалить</th>
              </tr>
          </thead>
          <tbody>
              {product.products.map( product =>
                  <tr key={product.IDProduct} className="table-line">
                      <td>{product.Name}</td>
                      <td>{product.InStock}</td>
                      <td>{product.ProductType}</td>
                      <td>{product.Colour}</td>
                      <td>{product.Price}</td>
                      <td className={'d-flex justify-content-between'}>
                          <button className={'btn btn-outline-dark'} onClick={btnchange} data-key={product.IDProduct} style={{margin: '0 5px'}}>Редактировать</button>
                          <button className={'btn btn-outline-danger'} onClick={btndelete} data-key={product.IDProduct}>Удалить</button>
                      </td>
                  </tr>
              )}
          </tbody>
      </table>
        <UpdateProduct show={UpdateProductVisible} onHide={() => setUpdateProductVisible(false)}/>
    </Container>
  );
});

export default Admin