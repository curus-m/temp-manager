import React from 'react';
import Mainpage from './Mainpage'
import Thermometer from './Thermometer'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import './App.scss';

function App() {
  // function myFunction() {
  //   this.class 
  // }
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-light bg-success">
            <ul className="nav nav-pills">
              <li className="nav-items">
                <Link to ="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-items">
                <Link to ="/thermometer" className="nav-link">Thermometer</Link>
                </li>
              <li className="nav-items" >
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </nav>
        </div>
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
