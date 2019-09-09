import React from "react";
import axios from 'axios';
import { Jumbotron, Form, Button, Col, Row } from "react-bootstrap";


class RequestForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }

    handleSubmit(event) {
        event.preventDefault();

        const request = {
          description: this.state.description,
          type: this.state.type,
          longitude: this.state.longitude,
          latitute: this.state.latitute,
          status: "unfulfilled",
          volunteer_count: 0
        } 

        console.log(request);
        
        axios
            .post('http://localhost:3001/requests', {request: request})
            .then(response => {
              console.log(response);
              console.log(response.data);
              window.location.href = "/";
            })
    }



	render() {
		return (
      <Jumbotron>
        <h1>Request Submission</h1>
        <p>SUbmit a request to get help on you r sdfkgjsdf gksdjhg isdfuhgdisfughds ifughsd of</p>
        <Form onSubmit={this.handleSubmit}>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control required onChange={this.handleChange} as="textarea" rows="3" id="description" name="description" placeholder="Enter your description" maxLength={300}/>
          </Form.Group>
          
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2} required onChange={this.handleChange} name="type">
              Type
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="One-time task"
                name="formHorizontalRadios"
              />
              <Form.Check
                type="radio"
                label="Material need"
                name="formHorizontalRadios"
              />
            </Col>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="Longitude">
              <Form.Label>Longitude</Form.Label>
              <Form.Control required onChange={this.handleChange} name="longitude" type="integer" placeholder="Longitude" />
            </Form.Group>
            <Form.Group as={Col} controlId="Latitude">
              <Form.Label>Latitude</Form.Label>
              <Form.Control required onChange={this.handleChange} name="latitude" type="integer" placeholder="Latitude" />
            </Form.Group>
          </Form.Row>

          <Button type="submit">
              Submit
          </Button>
        </Form>
      </Jumbotron>
		)
	}
}

export default RequestForm;