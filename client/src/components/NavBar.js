import React, { useContext } from 'react'
import { Context } from '../index'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const'
import { observer } from 'mobx-react-lite'
import {Link} from "react-router-dom";
import CategoryBar from "./CategoryBar";
import {useNavigate} from 'react-router-dom'

const btnCategory = () => {
    const dropMenuCategory = document.querySelector('.drop-list_category')

    if (dropMenuCategory.classList.contains('active'))
        dropMenuCategory.classList.remove('active')
    else
        dropMenuCategory.classList.add('active')
}

export const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
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
            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)} className="mx-2">Выйти</Button>
          </Nav>
          :
          <Nav className="ml-auto">
            <Button variant={"outline-light"} href={LOGIN_ROUTE} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }

      </Container>
    </Navbar>
  )
});