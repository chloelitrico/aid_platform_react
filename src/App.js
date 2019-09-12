import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navigation from './components/Navigation'
import SignUp from './components/Signup'
import ErrorPage from './components/ErrorPage'
import MyMap from './components/MyMap'
import Request from './components/Request'



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {};  
  }
  componentWillMount(){
      if(sessionStorage.getItem('user') != null){
          this.setState({isLoggedIn: true}); 
      } 
  }

  render(){
    return (

        <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={SignUp} />
          <PrivateRoute path="/my_map" component={MyMap} />
          <PrivateRoute path="/request" component={Request} />
          <Route component={ErrorPage} />
        </Switch>
        </BrowserRouter>

    );
  }
}





const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = {props =>
      sessionStorage.getItem('user') ? (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = {props =>
      sessionStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

export default App;
