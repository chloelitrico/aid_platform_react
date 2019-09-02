import React from 'react';
import $ from 'jquery';
import { Container, Form, Button } from 'react-bootstrap';

class Signup extends React.Component {
  handleSignup = (e) => {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/auth',
      data: {
        first_name: this.firstName.value,
        last_name: this.lastName.value,
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
        <h1>Register</h1>
        <Form onSubmit={this.handleSignup}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="firstName" ref = {(input) => this.firstName = input} placeholder="Enter first name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="lastName" ref = {(input) => this.lastName = input} placeholder="Enter last name" />
          </Form.Group>
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
          <p>[Upload gvt id]</p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
      </Container>
    )
  }
}
export default Signup;