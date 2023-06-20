import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE } from '../utils/const'
import { observer } from 'mobx-react-lite'
import {Link} from "react-router-dom";
import CategoryBar from "./CategoryBar";
import {useNavigate} from 'react-router-dom'
import { fetchCategory, fetchSubcategory, getAllProductBasket } from '../http/productApi'
import data from 'bootstrap/js/src/dom/data'



export const NavBar = observer(() => {
  const { user, product } = useContext(Context)
  const navigate = useNavigate()
  const logOut = () =>{
    user.onLogout()
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
    getAllProductBasket(user.user.IDUser).then(data => product.setBasket(data))
    console.log(product.basket)
  }, [])
  const btn = () => {
    navigate(ADMIN_ROUTE)
    product.Clean()
  }
  const btnHome = () => {
    product.page = 1
    product.Clean()
  }
  return (
    <Navbar className={'navigation py-3'} bg="dark" variant="dark" >
        <CategoryBar/>
      <Container>
        <Nav className={'d-flex align-items-center'}>
          <Link onClick={btnHome} className={'nav-link_home'} to={SHOP_ROUTE}>Магазин сантехники</Link>
            <button onClick={btnCategory} className={'btn btn-primary mx-2'}>Категории</button>
        </Nav>
        {user.isAuth ?
          <Nav className="ml-auto">
            {user.user.IDRole === 1 && <Button variant={"outline-light"} className="mx-2" onClick={btn}>Админ панель</Button>}
            <Dropdown>
              <Dropdown.Toggle>Настройки</Dropdown.Toggle>
              <Dropdown.Menu>
                <Button variant={"outline-dark"} onClick={() => navigate(PROFILE_ROUTE)}  className="mx-2">Профиль</Button>
                <Button variant={"outline-dark"} onClick={() => navigate(BASKET_ROUTE)}  className="mx-2 mt-2">Корзина</Button>
                <Button variant={"outline-dark"} onClick={() => logOut()} className="mx-2 mt-2">Выйти</Button>
              </Dropdown.Menu>
            </Dropdown>
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