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
  const [value, setValue] = useState('От дорогих к дешевым')

  function changeSelect(e) {
    setValue(e.target.value)
    let mas = product.products
    if (value === "От дорогих к дешевым")
      mas.sort((a, b) => +a.Price > +b.Price ? -1 : 1)
    if (value === "От дешевых к дорогим")
      mas.sort((a, b) => +a.Price > +b.Price ? 1 : -1)

    product.setProducts(mas)
  }

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
          <div className={'d-flex justify-content-end'} style={{width: "100%"}}>
            <select style={{width: "300px"}} value={value} onChange={(e) => changeSelect(e)} className="form-select">
              <option>От дорогих к дешевым</option>
              <option>От дешевых к дорогим</option>
            </select>
          </div>
          <div className={'d-flex flex-column justify-content-between align-items-center'} style={{height: "680px"}}>
            <ProductList/>
            <Pages/>
          </div>
          <button className={'btn btn-secondary'} onClick={() => navigate(CONTACT_FORM)} style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
            Поддержка
          </button>
        </Container>
      </section>
  );
})

export default Shop;
