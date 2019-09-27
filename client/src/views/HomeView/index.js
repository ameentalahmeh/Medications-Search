import React, { Component } from "react";
import Form from '../../components/Form';
import Drug from '../../components/Drug';
import "./Home.css";


class HomeView extends Component {
  state = {

  };
  render(){
    return(
    <div className = 'Home'>
        <Form />
        <Drug />
    </div>
    )
  }
}
export default HomeView;
