import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import Error from "./views/ErrorView";
import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/error" component={Error} />
      </React.Fragment>
    </Router>
  );
}

export default App;
