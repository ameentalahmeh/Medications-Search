import React, { Component } from "react";
import SearchBar from '../../components/SearchBar';
import MedicationsView from '../MedicationsView';
// import ErrorView from '../ErrorView';
import "./Home.css";

class HomeView extends Component {
  constructor(){
    super();
    this.state = {
        msgErr : '',
        errCode : 0,
        isAction: false,
        inputsArr: [],
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

    // handling the button action.
    this.setState({ isAction: true})

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
    if(result.success === true){
    // handling response for successed request.
        if(result.code === 1){
        this.setState({ medications: result.medications })
      } else {
        this.setState({ medications: [] })
      }
    }else if(result.success === false) {
    // handling response for failed request.
    this.setState({ errCode:1, msgErr: result.message})
  }
    })

    // Clear the old medications to placing the new.
    this.setState({ medications: []})
}

  render(){
    return(
      <div className = 'Home'>
        <h1 className="Title"> Drugs & Medications Search </h1>
        <SearchBar onAction = {this.handlingGetAction} />
        {
          this.state.isAction ?
             <div className ="MedicationsViewSection">
                <h2 className = "ShowResultsTitle"> The retrieved drugs and medications are: </h2>
                {
                  this.state.medications.length !==0 ?
                  <MedicationsView medications = {this.state.medications}/>
                  :
                  <MedicationsView medications = {[]}/>
                }
            </div>
        :null
        }
      </div>
    )
  }
}
export default HomeView;
