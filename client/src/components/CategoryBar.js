//import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React from "react";
//import { Context } from '../index'

const CategoryBar = observer (() => {
  //const {product} = useContext(Context)
  return (
      <div className={'drop-list_category'}>
        <Container style={{width: '100%', display: 'flex'}}>
          <div style={{width: '25%'}}>
              <ul className="for-ul">
                  <li id={'1'}><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
                  <li><a href="#">
                      <strong>Водичка</strong>
                  </a></li>
              </ul>
          </div>
          <div style={{width: '75%'}}>
              <div className={'category-list_left'}>
                  <div>
                      <h5>Заголовок списка</h5>
                      <ul>
                          <li>элемент</li>
                          <li>элемент</li>
                          <li>элемент</li>
                          <li>элемент</li>
                      </ul>
                  </div>
                  <div>
                      <h5>Заголовок списка</h5>
                      <ul>
                          <li>элемент</li>
                          <li>элемент</li>
                          <li>элемент</li>
                          <li>элемент</li>
                      </ul>
                  </div>
              </div>
          </div>
        </Container>
      </div>
  )
});

export default CategoryBar