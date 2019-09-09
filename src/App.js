import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navigation from './components/Navigation'
import SignUp from './components/Signup'
import ErrorPage from './components/ErrorPage'
import MyMap from './components/MyMap'
import Request from './components/Request'


function App() {
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

  return (
    <div>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={SignUp} />
        <PrivateRoute path="/my_map" component={MyMap} />
        <PrivateRoute path="/request" component={Request} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
