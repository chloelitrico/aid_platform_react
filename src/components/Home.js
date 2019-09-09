import React from 'react';
import {Button} from 'react-bootstrap';


class Home extends React.Component {
  render() {
    return (
      <div >
        <h1> Home </h1>
        <Button href="/request">Submit Request</Button>
      </div>
    );
  }
}
export default Home;
