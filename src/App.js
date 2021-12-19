import React, { Component } from 'react';
import { Nav,  NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Route, Switch, } from "react-router-dom";
import Register from './Register.js';
import Login from './Login.js';
import Welcome from './Welcome';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
       
            <Nav>
              <LinkContainer to="/register" className="btn btn-secondary btn-block">
                <NavItem>Register</NavItem>
              </LinkContainer>
              <br />
              <LinkContainer to="/login" className="btn btn-success btn-block">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register}  />
          <Route path="/welcome" exact component={Welcome}  />
        </Switch>

      </div>
    );
  }}
export default App;