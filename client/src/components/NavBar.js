import React, { useContext } from 'react'
import { Context } from '../index'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const'
import { observer } from 'mobx-react-lite'

export const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{position: "fixed", width:"100%"}}>
        <Container>
          <Nav>
            <Nav.Link href={SHOP_ROUTE}>Магазин сантехники</Nav.Link>
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
      </div>
  )
});