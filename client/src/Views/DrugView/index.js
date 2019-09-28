import React from "react";
import Table from '../../components/Table';
import "./Drug.css";


function Drug (props){
      return(
        <div>
          <Table drugs = {props.drugs}/>
        </div>
      )
    }
export default Drug;
