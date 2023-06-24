import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SupportForm = () => {
  return (
    <section>
      <Container className="page-shop">
        <h1>Форма обратной связи</h1>
        <Form action="https://formsubmit.co/f4de5bec74dbcd979995c125b359842e" target="_blank" method="POST" className="w-50 ">
          <Form.Group controlId="formName">
            <Form.Label>ФИО</Form.Label>
            <Form.Control type="text" name="Name" placeholder="ФИО" required/>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Почта</Form.Label>
            <Form.Control type="email" name="Email" placeholder="Почта" required/>
          </Form.Group>
          <Form.Group controlId="formTopic">
            <Form.Label>Тема обращения</Form.Label>
            <Form.Control as="select" name="Тема обращения">
              <option>Восстановление аккаунта</option>
              <option>Гарантийное обслуживание и возврат</option>
              <option>Другое</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Сообщение</Form.Label>
            <Form.Control as="textarea" name="Message" placeholder="Сообщение" required/>
          </Form.Group>
          <Button type="submit" className="mt-2">Отправить</Button>
        </Form>
      </Container>
    </section>
  );
};

export default SupportForm;
