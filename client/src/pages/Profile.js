import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ProductList from '../components/ProductList'
import { Context } from '../index'


const Profile = () => {
  const {user} = useContext(Context)
  console.log(user.user)
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
                  <strong>Город:</strong> {user.user.PhoneNumber}<br />
                  <strong>Страна:</strong> USA
                </Card.Text>
                <Button variant="primary">Редактировать профиль</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Profile