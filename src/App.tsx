import React from 'react';
import Mainpage from './Mainpage'
import Thermometer from './Thermometer'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import './App.scss';
import {Navbar, Nav} from 'react-bootstrap';

function App() {
  // function myFunction() {
  //   this.class 
  // }
  return (
    <div className="App">
      <Router>
        <Navbar bg="success" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/"  className="nav-link">Home</Link>
            <Link to="/thermometer" className="nav-link">Thermometer</Link>
            <Link to="/about" className="nav-link">About</Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      <Switch>
      <Route path="/thermometer">
            <Thermometer/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Mainpage/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}
function About() {
  return <h2>About</h2>;
}

export default App;
