import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col bg='bg-secondary' className='text-center py-3 '>Copyright &copy; Handmade By Design</Col>
        </Row>
      </Container>
    </footer >
  )
}

export default Footer
