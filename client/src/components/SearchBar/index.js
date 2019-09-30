import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
    return(
      <div className = "formContainer">
        <div className = "InputParams">
          <input  id="drugCode"
                  type="text"
                  name="drugCode"
                  placeholder="Enter the drug code"
            />
          <input  id="diseaseCode"
                  type="text"
                  name="diseaseCode"
                  placeholder="Enter the disease code"
            />
          <select id = "type"
                  type ="number"
                  name="type" >
                <option value=""> Type </option>
                <option value="1">1</option>
                <option value="2">2</option>
          </select>
        </div>
          <input  type="submit"
                  value="Search"
                  onClick = {props.onAction}
            />
      </div>
    )
}
export default SearchBar;
