import React, { Component } from "react";
import SearchBar from '../../components/SearchBar';
import MedicationsView from '../MedicationsView';
import "./Home.css";

class HomeView extends Component {
  constructor(){
    super();
    this.state = {
    };
  }
  readInputs  = () => {
    var drugCode = document.getElementById("drugCode");
    var diseaseCode = document.getElementById("diseaseCode");
    var type = document.getElementById("type");
    var inputsArr = [drugCode, diseaseCode, type];
    return inputsArr;
  }
  handlingGetAction = () => {

    // Handle Click button
    this.setState({isAction:true, fetchIsDone: false, hasMedications: false });

    // read Inputs before fetching.
    const inputsArr = this.readInputs();

    // Prepare the search query
    var query = '?';
    inputsArr.forEach( function(i) {
      query = query + (i.name + "=" + (i.value ? i.value : i.name) + "&");
    })
    query = query.slice(0, -1);

    // Do fetch.
    fetch('/api/getMedicationsInfo' + query)
    .then(res => res.json())
    .then(result => {

      console.log(result);

        // handling response for successed request.
        if(result.code === 1){
          // There are medications.
          this.setState({ fetchIsDone: true, hasMedications: true, medications: result.medications })
        } else if(result.code === 2){
          // No Medications.
          this.setState({ fetchIsDone: true, hasMedications: false })
        }
    })
}

  render(){
    return(
      <div className = 'Home'>
        <h1 className="Title"> Drugs & Medications Search </h1>
        <SearchBar onAction = {this.handlingGetAction} />
        {
        this.state.isAction ?
          !this.state.fetchIsDone ?
            <h1> Loading ... </h1>
            :
             <div className ="MedicationsViewSection">
                <h2 className = "ShowResultsTitle"> The retrieved drugs and medications are: </h2>
                {
                  this.state.hasMedications ?
                  <MedicationsView medications = {this.state.medications}/>
                :
                  <Empty />
                }
            </div>
          :
          null
        }
      </div>
    )
  }
}
const Empty = () => <center><h1> No Medications </h1></center>
export default HomeView;
