import React from "react";
import $ from 'jquery';
import { Jumbotron, Form, Button, Col, Row } from "react-bootstrap";


class RequestForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }

     handleSubmit() {
        const request = {
          description: this.state.description,
          request_type: this.state.request_type,
          longitude: this.state.longitude,
          latitude: this.state.latitude,
          status: "unfulfilled",
          volunteer_count: 0
        }; 

        console.log(request);
        
        $.ajax({
          type: 'POST',
          url: 'http://localhost:3001/requests',
          data: {request: request},
          headers: JSON.parse(sessionStorage.user)
        })
        /*.done((data) => {
          this.props.handleNewAppointment(data);
        })
        .fail((response) => {
          this.setState({formErrors: response.responseJSON,
                         formValid: false});
        });*/
      }


	render() {
		return (
      <Jumbotron>
        <h1>Request Submission</h1>
        <p>Submit a request to get help on you r sdfkgjsdf gksdjhg isdfuhgdisfughds ifughsd of</p>
        <Form onSubmit={this.handleSubmit}>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control required onChange={this.handleChange} as="textarea" rows="3" name="description" placeholder="Enter your description" maxLength={300}/>
          </Form.Group>
          
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2} required  >
              Type
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="One-time task"
                value="task"
                name="request_type"
                onChange={this.handleChange}
              />
              <Form.Check
                type="radio"
                label="Material need"
                value="material"
                name="request_type"
                onChange={this.handleChange}
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