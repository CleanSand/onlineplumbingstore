import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { ChangePassword } from '../../http/userApi'
import { Context } from '../../index'

const UpdatePassword = observer( ({show, onHide}) => {
  const {user} = useContext(Context)
  const [CurrentPassword, setCurrentPassword] = useState('');
  const [ChangedPassword, setChangedPassword] = useState('');
  const [RepeatedChangedPassword, setRepeatedChangedPassword] = useState('');

  const btnChangePassword = () => {
    if (ChangedPassword === RepeatedChangedPassword){
      const formData = new FormData();

      formData.append('IDUser', user.user.IDUser);
      formData.append('passwordCurrent', CurrentPassword);
      formData.append('changedPassword', ChangedPassword);
      ChangePassword(formData).then(
        onHide()
      )
      alert("Успешно")
    }else {
      alert("Новые пароли не совпадают")
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered style={{ zIndex: 9999 }}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Сменить пароль
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          value={CurrentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
          className="form-control"
          placeholder="Введите текущий пароль"
        />
        <Form.Control
          value={ChangedPassword}
          onChange={e => setChangedPassword(e.target.value)}
          className="form-control"
          placeholder="Введите новый пароль"
        />
        <Form.Control
          value={RepeatedChangedPassword}
          onChange={e => setRepeatedChangedPassword(e.target.value)}
          className="form-control"
          placeholder="Повторите новый пароль"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={btnChangePassword}>
          Изменить
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default UpdatePassword