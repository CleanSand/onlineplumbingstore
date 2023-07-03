import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../index'
import { Button, Container, Dropdown, Form, Nav, Navbar } from 'react-bootstrap'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE, PURCHASE_HISTORY_ROUTE } from '../utils/const'
import { observer } from 'mobx-react-lite'
import { Link, useLocation } from 'react-router-dom'
import CategoryBar from "./CategoryBar";
import { useNavigate } from 'react-router-dom'
import { fetchCategory, fetchProduct, fetchSubcategory, getAllProductBasket } from '../http/productApi'

export const NavBar = observer(() => {
  const { user, product } = useContext(Context)
  const navigate = useNavigate()
  const [searchBar, setSearchBar] = useState('')
  const location = useLocation();
  const logOut = () => {
    user.onLogout()
    navigate(SHOP_ROUTE)
  }

  async function getBasket() {
    product.CleanBasket()
    if (product.basket.length === 0 || product.basket.length === null) {
      await getAllProductBasket(user.user.IDUser).then(data => product.setBasket(data))
      console.log(product.basket)
    }
  }

  const btnCategory = () => {
    const dropMenuCategory = document.querySelector('.drop-list_category')

    if (dropMenuCategory.classList.contains('active'))
      dropMenuCategory.classList.remove('active')
    else
      dropMenuCategory.classList.add('active')
  }

  useEffect(() => {
    getBasket()
    fetchCategory().then(data => product.setCategories(data))
    fetchSubcategory().then(data => product.setSubCategories(data))
    getAllProductBasket(user.user.IDUser).then(data => product.setBasket(data))

  }, [])

  const btn = () => {
    navigate(ADMIN_ROUTE)
    product.Clean()
  }

  const btnBasket = () => {
    navigate(BASKET_ROUTE)
    getBasket()
  }

  const btnHistory = async () => {
    navigate(PURCHASE_HISTORY_ROUTE)
  }

  const btnHome = () => {
    product.setPage(1)
    product.Clean()
  }

  const handleSearch = (event) => {
    event.preventDefault();
    fetchProduct(undefined, product.page, 9, undefined, searchBar).then(data => product.setProducts(data.rows))
    console.log(product.products)
  }

  return (
    <Navbar className={'navigation py-3'} bg="dark" variant="dark" >
      <CategoryBar />
      <Container>
        <Nav style={{width: "270px"}} className={'d-flex align-items-center'}>
          <Link onClick={btnHome} className={'nav-link_home'} to={SHOP_ROUTE}>Магазин сантехники</Link>
          <button onClick={btnCategory} className={'btn btn-primary mx-2'}>Категории</button>
        </Nav>
        {location.pathname === SHOP_ROUTE && (
          <Nav>
            <Form onSubmit={handleSearch} controlId="formEmail" className={'d-flex'} style={{ width: "500px" }}>
              <Form.Control
                type="text"
                placeholder="Поиск"
                required
                value={searchBar}
                onChange={e => setSearchBar(e.target.value)}
              />
            </Form>
          </Nav>
        )}
        {user.isAuth ?
          <Nav style={{width: "270px"}} className="ml-auto">
            {user.user.IDRole === 1 && <Button variant={"outline-light"} className="mx-2" onClick={btn}>Админ панель</Button>}
            <Dropdown>
              <Dropdown.Toggle>Настройки</Dropdown.Toggle>
              <Dropdown.Menu className={"dropmenu"}>
                <Button variant={"outline-dark"} onClick={() => navigate(PROFILE_ROUTE)}>Профиль</Button>
                <Button variant={"outline-dark"} onClick={btnBasket}>Корзина</Button>
                <Button variant={"outline-dark"} onClick={btnHistory}>История покупок</Button>
                <Button variant={"outline-dark"} onClick={() => logOut()}>Выйти</Button>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          :
          <Nav style={{width: "270px"}} className="ml-auto">
            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
});
