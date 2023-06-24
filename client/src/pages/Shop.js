import React, {useContext, useEffect, useState} from 'react'
import { Col, Container } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import {fetchProduct, getAllProductBasket} from '../http/productApi'
import Pages from '../components/Pages'
import { useNavigate } from 'react-router-dom'
import SupportForm from './SupportForm'
import { CONTACT_FORM } from '../utils/const'

const Shop = observer(() =>{
  const {product, user} = useContext(Context)
  const navigate = useNavigate()
  const [sortType, setSortType] = useState('default')
  console.log(product.products)
  useEffect(() =>{
    if(product.SelectedSubCategories){
      fetchProduct(product.SelectedSubCategories.IDSubcategory, product.page , 9).then(data => {
        product.setProducts(data.rows)
        product.setTotalCount(data.count)
      })}
    else{
      fetchProduct(undefined, product.page, 9).then(data => product.setProducts(data.rows))
    }
  }, [product.SelectedSubCategories, product.page])

  return (
      <section>
        <Container className={'page-shop'}>
          <button >Сортировка</button>
          <ProductList/>
          <Pages/>
          <button onClick={() => navigate(CONTACT_FORM)} style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
            Моя кнопка
          </button>
        </Container>
      </section>
  );
})

export default Shop;
