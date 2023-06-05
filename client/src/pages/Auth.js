import React from 'react'
import { Button, Card, Container, Form, } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'
import { Link, useLocation} from 'react-router-dom'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: "100vh"}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите почту или номер телефона..."
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."
          />
          <div className="d-flex justify-content-between mt-3">
            {isLogin ?<div>
              Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрироваться</Link>
            </div>
              :
              <div>
                Есть аккаунта? <Link to={LOGIN_ROUTE}>Авторизироваться</Link>
              </div>
            }
            <Button variant={"outline-success"} style={{width: "100px"}}>
              Войти
            </Button>
          </div>


        </Form>
      </Card>
    </Container>
  );
};

export default Auth