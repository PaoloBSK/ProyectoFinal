import React from 'react'
import './footer.css'
import { Container, Row,Col,ListGroup , ListGroupItem } from 'reactstrap'
import{Link} from 'react-router-dom'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
   <footer className="footer">
    <Container>
      <Row>
      <Col lg='4'>
      <div className="logo">
            
            <div>
              <h1 className='text-white'>Multimercado</h1>
              
            </div>
           
          </div>
          <p className="footer_text mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni in omnis accusantium enim! Ipsam ex enim ratione dolorum, ducimus non.
            </p>
      </Col>
      <Col lg='3'>
        <div className="footer_quick-links">
          <h4 className="quick_links-title">Top Categoria</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Telefonos Mobiles</Link>
            </ListGroupItem>

            <ListGroupItem  className='ps-0 border-0'>
              <Link to='#'>Sofas Modernos</Link>
            </ListGroupItem>

            <ListGroupItem  className='ps-0 border-0'>
              <Link to='#'>Sillas</Link>
            </ListGroupItem>

            <ListGroupItem  className='ps-0 border-0'>
              <Link to='#'>Smart Watches</Link>
            </ListGroupItem>

          </ListGroup>
        </div>
      </Col>
      <Col lg='2'>
      <div className="footer_quick-links">
          <h4 className="quick_links-title">links Utiles</h4>
          <ListGroup>
            <ListGroupItem className='ps-0 border-0'>
              <Link to='/shop'>Shop</Link>
            </ListGroupItem>

            <ListGroupItem  className='ps-0 border-0'>
              <Link to='cart'>Cart</Link>
            </ListGroupItem>

            <ListGroupItem  className='ps-0 border-0'>
              <Link to='/login'>Login</Link>
            </ListGroupItem>

            <ListGroupItem  className='ps-0 border-0'>
              <Link to='#'>Politica de Privacidad</Link>
            </ListGroupItem>

          </ListGroup>
        </div>

      </Col>
      <Col lg='3'>
      <div className="footer_quick-links">
          <h4 className="quick_links-title">Contactos</h4>
          <ListGroup className='footer_contact'>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class='ri-map-pin-line'></i></span>
              <p>123 Actipan, Ciudad de Mexico Mexico</p>
            </ListGroupItem>

            <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-2'>
            <span><i class='ri-phone-line'></i></span>
              <p>+52 3658 9865 </p>
            </ListGroupItem>

            <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-2'>
            <span><i class='ri-mail-line'></i></span>
              <p>Multimercado@gmail.com</p>
            </ListGroupItem>

          </ListGroup>
        </div>
      </Col>
      <Col lg ='12'>
        <p className='footer_copyright'>Copyright {year} developed by Paolo Bascope / Rodrigo Canales/ Javier. All rights reserved.</p>
      </Col>
      </Row>
    </Container>
   </footer>
  )
}

export default Footer