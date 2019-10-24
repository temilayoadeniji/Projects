import React from 'react'
import {Form, Button, Footer} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Account = () =>{
  return(

    <Form>
    <div>Login</div>
    <br/><br/>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="password" />
    <br/>
    <Link><p>Forgot Your Password</p></Link>
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="dark" type="Sign in">
  submit
  </Button> <Link>Register a new account</Link>
  </Form>


)
}



  export default Account
