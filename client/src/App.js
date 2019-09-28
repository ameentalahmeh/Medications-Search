import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
// import Error from "./Views/ErrorView";
import './App.css';

class App extends Component {
  render(){
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/api/getDrugsInfo" component={HomeView} />
      </React.Fragment>
    </Router>
  );
}
}
export default App;
