import React, { useState } from 'react'
import { Button, Card, Form, } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'
import { Link, useLocation} from 'react-router-dom'
import { login, registration } from '../http/userApi'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [LastName, setLastName] = useState('')
  const [SecondName, setSecondName] = useState('')
  const [FirstName, setFirstName] = useState('')
  const [BirthDate, setBirthDate] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')

  const click = async () =>{
    if(isLogin){
      const response = await login()
    }else {
      const response = await registration(Email, Password, LastName, SecondName, FirstName, BirthDate, PhoneNumber )
      console.log(response)
    }
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{height: "100vh", width:"100vw", position:"absolute", left: '0', top: '0'}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          {isLogin ?
            <div>
              <Form.Control
                className="mt-3"
                placeholder="Введите номер телефона..."
                value={PhoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <Form.Control
                className="mt-3"
                placeholder="Введите пароль..."
                value={Password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </div>
            :
            <div>
              <Form.Control
                className="mt-3"
                placeholder="Введите фамилию"
                value={LastName}
                onChange={e => setLastName(e.target.value)}
              />
              <Form.Control
                className="mt-3"
                placeholder="Введите имя"
                value={FirstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <Form.Control
                className="mt-3"
                placeholder="Введите отчество"
                value={SecondName}
                onChange={e => setSecondName(e.target.value)}
              />
              <Form.Control
                className="mt-3"
                placeholder="Введите номер телефона"
                value={PhoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                type="number"
              />
              <Form.Control
                className="mt-3"
                placeholder="Выберите дату рождения"
                value={BirthDate}
                onChange={e => setBirthDate(e.target.value)}
                type="date"
              />
              <Form.Control
                className="mt-3"
                placeholder="Введите почту"
                value={Email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control
                className="mt-3"
                placeholder="Введите пароль"
                value={Password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </div>
          }


          <div className="d-flex justify-content-between mt-3">
            {isLogin ?<div>
              Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрироваться</Link>
            </div>
              :
              <div>
                Есть аккаунта? <Link to={LOGIN_ROUTE}>Авторизироваться</Link>
              </div>
            }
            <Button
              variant={"outline-success"}
              style={{width: "150px"}}
              onClick={click}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </div>


        </Form>
      </Card>
    </div>
  );
};

export default Auth