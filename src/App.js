import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navigation from './components/Navigation'
import SignUp from './components/Signup'


function App() {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
