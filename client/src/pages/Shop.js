import React, { useContext, useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchProduct } from '../http/productApi'
import Pages from '../components/Pages'

const Shop = observer(() =>{
  const {product} = useContext(Context)
  useEffect(() =>{
    if(product.SelectedSubCategories){
      fetchProduct(product.SelectedSubCategories.IDSubcategory, product.page , 5).then(data => {
        product.setProducts(data.rows)
        product.setTotalCount(data.count)
      })}
    else{
      fetchProduct().then(data => product.setProducts(data.rows))
    }
  }, [product.SelectedSubCategories, product.page])

  return (
      <section>
        <Container className={'page-shop'}>
          <ProductList/>
          <Pages/>
        </Container>
      </section>
  );
})

export default Shop;
