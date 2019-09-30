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
        medications : [],
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

      // handling response for failed request.
      if(result.success === false ){
            this.setState({ errCode:1, msgErr: result.message})
        }
      // handling response for successed request.
      else if(result.success === true){
        if (result.code === 2) {
        this.setState({ medications: result.medications})
      }
      }
    })
}

  render(){
    return(
      <div className = 'Home'>
        <h1> Drugs & Medications Search </h1>
        <SearchBar onAction = {this.handlingGetAction} />
        {
          this.state.isAction ?
            <div className ="MedicationsViewSection">
                <h2> The retrieved drugs and medications are: </h2>
                {<MedicationsView medications = {this.state.medications}/>}
            </div>
          :null
        }
      </div>
    )
    }
  }
export default HomeView;
