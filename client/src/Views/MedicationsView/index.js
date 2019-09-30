import React from "react";
import Table from '../../components/Table';


function Medications (props){
      return(
        <div>
          <Table medications = {props.medications}/>
        </div>
      )
    }
export default Medications;
