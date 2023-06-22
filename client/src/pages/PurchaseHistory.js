import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Context } from '../index'

const PurchaseHistory = () => {
  const {product} = useContext(Context)
  return (
    <section>
      <Container>

      </Container>
    </section>
  )
}

export default PurchaseHistory