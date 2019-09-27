import React, { Component } from "react";
import "./Drug.css";


class Drug extends Component {
  constructor(){
  super();
  this.state = {
    drugs : []
  };
}
  componentDidMount(){
    fetch('/getDrugsInfo?drugCode=xaw123&diseaseCode=aaa444&type=1')
    .then(res => res.json())
    .then(retrievedDrugs => this.setState({ drugs: retrievedDrugs }))
  }

  render(){
    return(
      <div>
        <h2> The Retrieved Drugs </h2>
        <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Drug Code</th>
            <th>Disease Code</th>
            <th>Type</th>
         </tr>
        {
          this.state.drugs.map(drug => {
              const {id, decription, drugcode, diseasecode, type}  = drug;
              return(
                <tr key = {id}>
                  <td>{id}</td>
                  <td>{decription}</td>
                  <td>{drugcode}</td>
                  <td>{diseasecode}</td>
                  <td>{type}</td>
                </tr>
                )
              })
        }
      </tbody>
      </table>
      </div>
    )
  }
}
export default Drug;
