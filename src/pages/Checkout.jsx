import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)

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
              <h6>Total Cantidad: <span>{totalQty} items</span></h6>
              <h6>Subtotal: <span>${totalAmount}</span></h6>
              <h6> <span>Envio: <br/> Envio Gratis</span> <span>0</span></h6>
              <h4>Costo Total: <span>${totalAmount}</span></h4>

              <button className='buy_btnt authbt_r w-100'>Realizar el Pedido</button>
              
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
    
  )
}

export default Checkout