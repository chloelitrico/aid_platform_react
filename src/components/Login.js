import React from 'react';
import $ from 'jquery';
import { Container, Form, Button } from 'react-bootstrap';

class Login extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/auth/sign_in',
      data: {
        email: this.email.value,
        password: this.password.value
      }
    })
    .done((response, status, jqXHR) => {
      sessionStorage.setItem('user',
        JSON.stringify({
          'access-token': jqXHR.getResponseHeader('access-token'),
          client: jqXHR.getResponseHeader('client'),
          uid: response.data.uid
        })
      );
      this.props.history.push('/');
    })        
  }  
  
  render() {
    return (
      <Container>
        <h1>Log-in</h1>
        <Form onSubmit={this.handleLogin}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" ref = {(input) => this.email = input} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" ref = {(input) => this.password = input} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
      </Container>
    )
  }
}
export default Login;