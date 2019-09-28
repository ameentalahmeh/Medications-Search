import React, { Component } from "react";
import Form from '../../components/Form';
import DrugView from '../DrugView';
import "./Home.css";

class HomeView extends Component {
  constructor(){
    super();
    this.state = {
        drugs: [],
        msgErr : '',
      };
  }

  handlingGetAction = () =>{
    var drugCode = document.getElementById("drugCode").value;
    var diseaseCode = document.getElementById("diseaseCode").value;
    var type = document.getElementById("type").value;

  fetch('/api/getDrugsInfo?drugCode='+drugCode+'&diseaseCode='+diseaseCode+'&type='+type)
    .then(res => res.json())
    .then(result => {
      if(result.success === true){
        if (result.code === 1) {
          this.setState({ drugs: []})
        }
        this.setState({ drugs: result.drugs})
      }
      else if(result.success === false ){
        if (result.code === 1) {
            this.setState({ msgErr: result.message})
        }
          this.setState({ msgErr: result.message})
      }
    })
  }

  render(){
    const drugs = this.state.drugs;
    return(
    <div className = 'Home'>
      <Form onAction = {this.handlingGetAction}/>
      <hr className = 'hortLine' ></hr>

      {
        drugs.length === 0 ? <h1> No drugs </h1> : <DrugView drugs = {drugs}/>
      }
      </div>
      )
  }
}
export default HomeView;
