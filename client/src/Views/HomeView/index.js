import React, { Component } from "react";
import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';
import "./Home.css";

var xml = require('xml');
var X2JS = require('x2js');
var x2js = new X2JS();


class HomeView extends Component {
  constructor(){
    super();
    this.state = {

    };
  }

  readInputsTags  = () => {
    var drugCode = document.getElementById("drugCode");
    var diseaseCode = document.getElementById("diseaseCode");
    var type = document.getElementById("type");
    var inputsArr = [drugCode, diseaseCode, type];
    return inputsArr;
  }

  readInputsValues = (SearchParams) => {
    var xmlInputs = [];
    SearchParams.forEach(function(i) {
        if (!i.value) {
          xmlInputs.push({ [i.name] : i.name })
        }else {
          xmlInputs.push({ [i.name] : i.value })
        }
    })
    return xmlInputs;
  }

  handlingGetAction = () => {

    // Handle Click button
    this.setState({isAction:true, fetchIsDone: false, hasMedications: false });

    // read Inputs Tags
    const inputsArr = this.readInputsTags();

    // Extract Inputs values.
    const xmlInputs = this.readInputsValues(inputsArr);


   // Create XMLHttpRequest
   var http = new XMLHttpRequest();
   var url = "/api/getMedicationsInfo";
   // Open the XHR request.
   http.open("POST", url, true);

   // Format the searchQuery as XML.
   const searchQueryXML = xml({inputs: xmlInputs}, { declaration: true });

   // XHR Response Handling
   http.setRequestHeader('Content-Type', 'text/xml'); // Set headers
   http.send(searchQueryXML); // Send the XML Request.

   // XHR Response Listening (Async)
   http.onreadystatechange = function() {
       if(http.readyState === 4) {
            // Convert XML Response to JS Objects.
            var  {results} = x2js.xml2js(http.responseText);
            // Display Results.
            if(parseInt(results.code) === 1 ){
              var meds = results.medications.med;
              meds = meds.length > 1000 ? meds = meds.slice(0,1000) : meds;
              this.setState({
                      fetchIsDone: true,
                      hasMedications: true,
                      medications: meds
                  })
            }
            else{
              this.setState({
                    fetchIsDone: true,
                    hasMedications: false
                 })}
          }
        }
   .bind(this)
   }

  // Rendering ...
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
               <h2 className = "ShowResultsTitle"> The most retrieved drugs and medications are: </h2>
               {
                 !this.state.hasMedications ?
                 <Empty />
                 :
                 <Table medications = {this.state.medications}/>
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
