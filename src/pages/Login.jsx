import React, {useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col,Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase.config'
import {toast} from 'react-toastify'
import '../styles/login.css'


const Login = () => {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[loading, setLoading] = useState(false)

  const signIn = async (e) =>{
    e.preventDefault()
    setLoading(true)
    try{
      const useCredential = await signInWithEmailAndPassword(auth,email,password)

      const user = useCredential.user



    }catch(error){
      setLoading(false)
      toast.error(error.message)
    }

  }


  return ( <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>LogIn</h3>
              <Form className='auth_form'>
                <FormGroup className='form_group'>
                  <input type="email" placeholder='Ingresa tu mail'  value={email} onChange={e=> setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="password" placeholder='Ingresa tu contraseña' value={password} onChange={e=> setPassword(e.target.value)}/>
                </FormGroup>

                <button type='submit' className="buy_btnt auth_btn">Login</button>
                  <p>No tienes Cuenta? {' '} 
                  <Link to='/signup'>Crea Una cuenta ahora:</Link> </p>
              </Form>

            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
  )
}

export default Login