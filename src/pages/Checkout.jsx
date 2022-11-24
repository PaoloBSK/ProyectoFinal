import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'

const Checkout = () => {
  return ( <Helmet title='Checkout'>
    <CommonSection title='Checkout'/>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className='mb-4 fw-bold'> Informacion De Facturacion</h6>
            <Form className='billing_form'>
              <FormGroup className="form_group">
                <input type="text" placeholder='Ingresa Tu Nombre'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="email" placeholder='Ingresa Tu Email'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="number" placeholder='Ingresa Tu direccion'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="text" placeholder='Ingresa Tu Nombre'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="text" placeholder='Ingresa Tu Codigo Postal'/>
              </FormGroup>
              <FormGroup className="form_group">
                <input type="text" placeholder='Ingresa Tu Pais'/>
              </FormGroup>
            </Form>
          </Col>
          <Col lg='4'>
            <div className="checkout_cart">
              <h6>Total Cantidad: <span>0</span></h6>
              <h6>Subtotal: <span>$120</span></h6>
              <h6>Envio: <span>0</span></h6>
              <h6>Envio Gratis </h6>
              <h6>Costo Total: <span>120</span></h6>
              
            </div>
            <button className='buy_btn auth_btr w-100'>Realizar el Pedido</button>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
    
  )
}

export default Checkout