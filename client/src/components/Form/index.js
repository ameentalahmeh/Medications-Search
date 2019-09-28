import React from "react";
import "./Form.css";


function Form (props){
    return(
      <div className = "formContainer">
        <div className = "InputParams">
        <input id="drugCode" type="text" name="drugCode" placeholder="Enter the drug code" required />
        <input id="diseaseCode" type="text" name="diseaseCode" placeholder="Enter the disease code" required />
        <select id = "type" type ="number" name="type" required>
            <option value=""> Select Type</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select></div>
        <button type="submit" onClick = {props.onAction}> Search </button>
      </div>
    )
}
export default Form;
