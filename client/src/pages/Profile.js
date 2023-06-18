import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import { Context } from '../index'
import UpdateProduct from '../components/modals/UpdateProduct'
import { fetchOneProduct } from '../http/productApi'
import UpdateUser from '../components/modals/UpdateUser'


const Profile = () => {
  const {user} = useContext(Context)
  const [UpdateUserVisible,setUpdateUserVisible] = useState(false)
  async function btnChangeUser (e){
    setUpdateUserVisible(true)
  }
  return (
    <section>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Профиль пользователя</Card.Title>
                <Card.Text>
                  <strong>Фамилия:</strong> {user.user.LastName}<br />
                  <strong>Имя:</strong> {user.user.FirstName}<br />
                  <strong>Отчество:</strong> {user.user.SecondName}<br />
                  <strong>Email:</strong> {user.user.Email}<br />
                  <strong>Номер телефона:</strong> {user.user.PhoneNumber}<br />
                  <strong>День рождения:</strong> {user.user.BirthDate} <br />
                </Card.Text>
                <Button variant="outline-dark"  onClick={btnChangeUser}>Редактировать профиль</Button>
                <Button variant="outline-dark" className="mx-2" onClick={btnChangeUser}>Сменить пароль</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <UpdateUser show={UpdateUserVisible} onHide={() => setUpdateUserVisible(false)}/>
      </Container>
    </section>
  )
}

export default Profile