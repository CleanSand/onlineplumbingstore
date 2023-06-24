import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { updateProduct } from '../../http/productApi'
import { updateUser } from '../../http/userApi'
import { useNavigate } from 'react-router-dom'
import { PROFILE_ROUTE } from '../../utils/const'
import jwtDecode from 'jwt-decode'

const UpdateUser = observer(({ show, onHide }) => {
  const {user} = useContext(Context)

  const [LastName, setLastName] = useState('');
  const [SecondName, setSecondName] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [BirthDate, setBirthDate] = useState('');
  useEffect(() => {
    if (user.user) {
      setLastName(user.user.LastName);
      setSecondName(user.user.SecondName);
      setFirstName(user.user.FirstName);
      setEmail(user.user.Email);
      setPhoneNumber(user.user.PhoneNumber);
      setBirthDate(user.user.BirthDate);
    }
  }, [user.user]);

  const btnUpdateProduct = () => {
    const updatedUser = {
      IDUser: user.user.IDUser,
      IDRole: user.user.IDRole,
      LastName,
      SecondName,
      FirstName,
      Email,
      PhoneNumber,
      BirthDate
    };
    updateUser(updatedUser).then(data => {
      onHide();
      user.setUser(jwtDecode(localStorage.token))
    });
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Редактировать профиль
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          value={LastName}
          onChange={e => setLastName(e.target.value)}
          className="form-control"
          placeholder="Введите фамилию"
          type="text"
        />
        <Form.Control
          value={FirstName}
          onChange={e => setFirstName(e.target.value)}
          className="form-control"
          placeholder="Введите имя"
          type="text"
        />
        <Form.Control
          value={SecondName}
          onChange={e => setSecondName(e.target.value)}
          className="form-control"
          placeholder="Введите отчество"
          type="text"
        />
        <Form.Control
          value={Email}
          onChange={e => setEmail(e.target.value)}
          className="form-control"
          placeholder="Введите почту"
          type="email"
        />
        <Form.Control
          value={PhoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          className="form-control"
          placeholder="Введите номер телефона"
        />
        <Form.Control
          value={BirthDate}
          onChange={e => setBirthDate(e.target.value)}
          className="form-control"
          type="date"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success"  onClick={btnUpdateProduct}>
          Редактировать
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default UpdateUser