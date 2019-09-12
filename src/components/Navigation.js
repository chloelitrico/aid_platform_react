import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css';
import $ from 'jquery';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
}

  componentWillMount(){
    if(sessionStorage.getItem('user') != null){
        this.setState({isLoggedIn: true}); 
    } 
    else{
        this.setState({isLoggedIn: false}); 
    }
  }
  
  handleSignOut = (e) => {
		e.preventDefault();
		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:3001/auth/sign_out',
			data: JSON.parse(sessionStorage.user)
		})
		.done(() => {
      sessionStorage.removeItem('user');
      window.location.reload();
      this.props.history.push('/login');
    })
    
	}

  render() {


      return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/"><i className="fas fa-map-marker"></i> MyAid</Navbar.Brand>
        <Nav className="ml-auto">
        {(this.state.isLoggedIn) ?
          <Nav.Link href="/my_map">Map</Nav.Link>
          : null }
          {(this.state.isLoggedIn) ?
          <Nav.Link href="#features"><i className="fas fa-user-alt"></i></Nav.Link>
          : <Nav.Link href="/signup">Sign-Up</Nav.Link> }
          {(this.state.isLoggedIn) ?
          <Nav.Link href="#" onClick={this.handleSignOut}><i className="fas fa-sign-out-alt"></i></Nav.Link>
          : <Nav.Link href="/login">Log-In</Nav.Link> }
          
            
        </Nav>
      </Navbar>

  		)
  	}
 	}


export default Navigation;
