import { observer } from 'mobx-react-lite'
import {Container} from "react-bootstrap";
import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import { fetchCategory } from '../http/productApi'
const CategoryBar = observer (() => {
    const {product} = useContext(Context)
  return (
      <div className={'drop-list_category'}>
        <Container style={{width: '100%', display: 'flex'}}>
          <div style={{width: '25%'}}>
              <ul className="for-ul">
                {product.categories.map(category =>
                  <li id={'1'}><a href="#">
                    <strong key={category.IDCategory}>{category.Name}</strong>
                  </a></li>
                )}

              </ul>
          </div>
          <div style={{width: '75%'}}>
              <div className={'category-list_left'}>
                  <div>
                      <h5>Заголовок списка</h5>
                      <ul >
                        {product.subcategories.map(subcategory =>
                          <li  id={'1'}><a className="text" href="#">
                            <strong key={subcategory.IDCategory}>{subcategory.Name}</strong>
                          </a></li>
                        )}
                      </ul>
                  </div>
              </div>
          </div>
        </Container>
      </div>
  )
});

export default CategoryBar