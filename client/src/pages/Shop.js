import React, { useContext, useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchProduct } from '../http/productApi'

const Shop = observer(() =>{
  const {product} = useContext(Context)
  useEffect(() =>{
    if(product.SelectedSubCategories){
      fetchProduct(product.SelectedSubCategories.IDSubcategory).then(data => product.setProducts(data.rows))
    }
    else{
      fetchProduct().then(data => product.setProducts(data.rows))
    }
  }, [product.SelectedSubCategories])
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
