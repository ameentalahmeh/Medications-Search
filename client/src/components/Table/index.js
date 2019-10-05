import React from "react";
import "./Table.css";

function Table(props) {
    const Medications = props.medications.length > 1 ? props.medications : [props.medications];
    const FirstMed = Medications[0];
    const MedicationsKeys = Object.keys(FirstMed);
    return(
      <table>
      <thead>
      {
        <tr>
        {
          MedicationsKeys.map((mkey, index) => {
            return(
              <th key = {index} >
              {
                mkey[0].toUpperCase() + mkey.substring(1,mkey.length)
              }
              </th>
            )
          })
        }
        </tr>
      }
      </thead>
      <tbody>
      {
        Medications.map((medication,index) => {
          const {id, description, drugcode, diseasecode, type}  = medication;
          return(
            <tr key = {index}>
            <td>{id}</td>
            <td>{description}</td>
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
