import React from 'react';
import Mainpage from './Mainpage'
import Thermometer from './Thermometer'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import './App.scss';
class App extends React.Component<{}, any> { 
    constructor(props : any) {
      super(props);
      this.state = {
        isExpanded: false
      };
    }
  
  handleToggle(e : any) {
    e.preventDefault();
    console.log("click!")
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <div className="App">
        <Router>
          <div className="topnav">
            <nav className="navbar navbar-light bg-success">
              <ul className="nav">
                <li className={`nav-items ${isExpanded ? "responsive" : ""}`}>
                  <Link to ="/" className="nav-link">Home</Link>
                </li>
                <li className={`nav-items ${isExpanded ? "responsive" : ""}`}>
                  <Link to ="/thermometer" className="nav-link">Thermometer</Link>
                </li>
                <li className={`nav-items ${isExpanded ? "responsive" : ""}`}>
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="icon"  onClick={e => this.handleToggle(e)}>
                  <i className="fa fa-bars"></i>
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

    function About() {
      return <h2>About</h2>;
    }
  }

}
export default App;
