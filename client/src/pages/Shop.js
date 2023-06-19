import React, { useContext, useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import {fetchProduct, getAllProductBasket} from '../http/productApi'
import Pages from '../components/Pages'

const Shop = observer(() =>{
  const {product, user} = useContext(Context)
  useEffect(() =>{
    console.log(user.user.IDUser)
    getAllProductBasket(user.user.IDUser).then(data => {
      product.setBasket(data)
    })
    console.log(product.basket)
    if(product.SelectedSubCategories){
      fetchProduct(product.SelectedSubCategories.IDSubcategory, product.page , 5).then(data => {
        product.setProducts(data.rows)
        product.setTotalCount(data.count)
      })}
    else{
      fetchProduct(undefined, product.page, 5).then(data => product.setProducts(data.rows))
    }
  }, [product.SelectedSubCategories, product.page, product.basket])
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
