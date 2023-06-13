import React, { Component, useContext, useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import axios from 'axios'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchCategory, fetchProduct } from '../http/productApi'

const Shop = observer(() =>{
  const {product} = useContext(Context)

  useEffect(() =>{
    fetchProduct().then(data => product.setProducts(data.rows))
  })
  return (
    <section>
      <Container className={'page-shop'}>
        <Col md={8} className={"prod-list"}>
          <ProductList/>
        </Col>

      </Container>
    </section>
  );
})

export default Shop;
