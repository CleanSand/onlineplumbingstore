import React, { useContext } from 'react'
import { Context } from '../index'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const'
import { observer } from 'mobx-react-lite'
import {Link} from "react-router-dom";

export const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
        <Nav>
          <Link className={'nav-link_home'} to={SHOP_ROUTE}>Магазин сантехники</Link>
        </Nav>
        {user.isAuth ?
          <Nav className="ml-auto">
            <Button variant={"outline-light"} >Админ панель</Button>
            <Button variant={"outline-light"} className="mx-2">Войти</Button>
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