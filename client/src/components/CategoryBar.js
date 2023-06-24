import { observer } from 'mobx-react-lite'
import {Container} from "react-bootstrap";
import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../index'
import { fetchCategory, fetchSubcategory } from '../http/productApi'



const CategoryBar = observer (() => {
    const [subcategories, setSubcategories] = useState([]);
    async function handleMouseEnter(e) {
        const key = e.target.dataset.key
        const res = await fetchSubcategory(key)
        setSubcategories(res)
        console.log(res)
        console.log(key)
    }

    const {product} = useContext(Context)
    return (
      <div className={'drop-list_category'}>
          <div>
              <Container style={{width: '100%', display: 'flex'}}>
                  <div style={{width: '25%'}}>
                      <ul
                          className="for-ul"
                      >
                          <li onClick={() => product.setSelectedSubCategories()}><a className="text" href="#">
                              <span >Все продукты</span>
                          </a></li>
                          {product.categories.map(category =>
                              <li
                                  key={category.IDCategory}
                                  data-key={category.IDCategory}
                                  onMouseEnter={handleMouseEnter}
                              ><a href="#">
                                  <span>{category.Name}</span>
                              </a></li>
                          )}

                      </ul>
                  </div>
                  <div style={{width: '75%'}}>
                      <div className={'category-list_left'}>
                          <div>
                              <h5>Заголовок списка</h5>
                              <ul id={'Subcategory'}>

                                  {subcategories.map(subcategory =>
                                      <li onClick={() => product.setSelectedSubCategories(subcategory)} key={subcategory.IDCategory}><a className="text" href="#">
                                          <span >{subcategory.Name}</span>
                                      </a></li>
                                  )}
                              </ul>
                          </div>
                      </div>
                  </div>
              </Container>
          </div>
      </div>
    )
});

export default CategoryBar