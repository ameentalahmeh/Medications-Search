import React from "react";
import "./Table.css";


function Table(props) {
  const drugs = props.drugs[0];
  const drugsKeys = Object.keys(drugs);
  console.log(drugsKeys);
    return(
      <table>
        <thead>
        {
          <tr>
          {
          drugsKeys.map((dkey, index) => {
            return(
              <th key = {index} > { dkey }</th>
            )
          })
        }
          </tr>
        }
        </thead>
        <tbody>
        {
          props.drugs.map((drug,index) => {
              const {id, decription, drugcode, diseasecode, type}  = drug;
              return(
                <tr key = {index}>
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
    )
  }
export default Table;
