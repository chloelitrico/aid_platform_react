import React from "react";
import $ from 'jquery';

class Counter extends React.Component {

    constructor () {
    super()
    this.state = {
            count: 0,
            requests: []
    };
    }
    
    componentDidMount(){
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/requests',
        headers: JSON.parse(sessionStorage.user)
      }).done((data) => {
        this.setState({requests: data});
      });
      setInterval(() => this.getCount(), 3000);
    }

    getCount() {
      var count = 0;
      this.state.requests.map(function(request, key) { 
        if (request.status === "unfulfilled") {
          count = count + 1;
        }
      })
        this.setState({ count });
      }

  render() {
      return (
      <div>

        {this.state.count} unfulfilled requests
      </div>
    );
  }
}
export default Counter;
