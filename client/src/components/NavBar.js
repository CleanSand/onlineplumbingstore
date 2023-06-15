import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const'
import { observer } from 'mobx-react-lite'
import {Link} from "react-router-dom";
import CategoryBar from "./CategoryBar";
import {useNavigate} from 'react-router-dom'
import { fetchCategory, fetchProduct, fetchSubcategory } from '../http/productApi'
import data from 'bootstrap/js/src/dom/data'



export const NavBar = observer(() => {
  const { user, product } = useContext(Context)
  const navigate = useNavigate()
  const logOut = () =>{
    user.setUser({})
    user.setIsAuth(false)
  }
  const btnCategory = () => {
    const dropMenuCategory = document.querySelector('.drop-list_category')

    if (dropMenuCategory.classList.contains('active'))
      dropMenuCategory.classList.remove('active')
    else
      dropMenuCategory.classList.add('active')
  }
  useEffect(() =>{
    fetchCategory().then(data => product.setCategories(data))
    fetchSubcategory().then(data => product.setSubCategories(data))
    fetchProduct().then(data => product.setProducts(data.rows))
  })

  return (
    <Navbar className={'navigation'} bg="dark" variant="dark" >
        <CategoryBar/>
      <Container>
        <Nav className={'d-flex align-items-center'}>
          <Link className={'nav-link_home'} to={SHOP_ROUTE}>Магазин сантехники</Link>
            <button onClick={btnCategory} className={'btn btn-primary mx-2'}>Категории</button>
        </Nav>
        {user.isAuth ?
          <Nav className="ml-auto">
            <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)} >Админ панель</Button>
            <Button variant={"outline-light"} onClick={() => logOut()} className="mx-2">Выйти</Button>
          </Nav>
          :
          <Nav className="ml-auto">
            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
        }

      </Container>
    </Navbar>
  )
});