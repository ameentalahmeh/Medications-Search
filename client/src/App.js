import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import './App.css';

class App extends Component {
  render(){
  return (
    <Router>
        <Route path="/" component={HomeView} />
        <Route path = "/api/getMedicationsInfo" component = {HomeView} />
    </Router>
  );
}
}
export default App;
