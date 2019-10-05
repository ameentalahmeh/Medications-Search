import React, { Component } from "react";
import SearchBar from '../../components/SearchBar';
import MedicationsView from '../MedicationsView';
import "./Home.css";

var xml = require('xml');
var X2JS = require('x2js');
var x2js = new X2JS();


class HomeView extends Component {
  constructor(){
    super();
    this.handlingGetAction = this.handlingGetAction.bind(this)
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

  covertToXML = (Inputs) => {
    var xmlInputs = [];
    Inputs.forEach(function(i) {
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

    // read Inputs before fetching.
    const inputsArr = this.readInputs();

    // Convert Form Inputs / XML format
    const xmlInputs = this.covertToXML(inputsArr);


   // Create XMLHttpRequest
   var http = new XMLHttpRequest();
   var url = "/api/getMedicationsInfo";
   // Open the XHR request.
   http.open("POST", url, true);

   // Prepare the search query
   const QuerySearchXML = xml({inputs: xmlInputs}, { declaration: true });

   // XHR Response Handling
       http.setRequestHeader('Content-Type', 'text/xml'); // Set headers
       http.send(QuerySearchXML); // Send the XML Request.

     // XHR Response Handling
       http.onreadystatechange = async function() {
       if(http.readyState === 4 && http.status === 200) {
         console.log(http.responseXML);
         var code = await http.responseXML.getElementsByTagName("code");
         var  {results} = x2js.xml2js(http.response);
         if (parseInt(code[0].childNodes[0].nodeValue) === 1) {
           this.setState({
                  fetchIsDone: true,
                  hasMedications: true,
                  medications: results.medications.med
                })
              }
            }
   }.bind(this)
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
