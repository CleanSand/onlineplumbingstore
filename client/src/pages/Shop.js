import React, { useContext, useEffect, useState } from 'react'
import {  Container, Form } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchProduct } from '../http/productApi'
import Pages from '../components/Pages'
import { useNavigate } from 'react-router-dom'
import { CONTACT_FORM } from '../utils/const'

const Shop = observer(() => {
  const { product } = useContext(Context)
  const navigate = useNavigate()
  const [sortType, setSortType] = useState('default')
  console.log(product.products)

  useEffect(() => {
    if (product.SelectedSubCategories) {
      fetchProduct(product.SelectedSubCategories.IDSubcategory, product.page, 9, sortType, undefined).then((data) => {
        product.setProducts(data.rows)
        product.setTotalCount(data.count)
      })
    } else {
      fetchProduct(undefined, product.page, 9, sortType, undefined).then((data) => product.setProducts(data.rows))
    }
  }, [product.SelectedSubCategories, product.page, sortType])

  const handleSortChange = (e) => {
    setSortType(e.target.value)
  }

  return (
    <section>
      <Container className={'page-shop'}>
        <div className={'d-flex w-100 justify-content-end'}>
          <Form.Control as="select" value={sortType} onChange={handleSortChange} style={{width: "300px"}} >
            <option value="default">По умолчанию</option>
            <option value="price-low-to-high">Сначала дешёвые</option>
            <option value="price-high-to-low">Сначала дорогие</option>
          </Form.Control>
        </div>
        <ProductList />
        <div style={{ position: 'absolute', bottom: '15px' }}>
          <Pages />
        </div>
        <button className={'btn btn-secondary'} onClick={() => navigate(CONTACT_FORM)} style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
          Поддержка
        </button>
      </Container>
    </section>
  )
})

export default Shop
