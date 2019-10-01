import React from "react";
import "./Table.css";

const Empty = () => <h1> No Medications </h1>;
function Table(props) {
  console.log('medications length',props.medications.length);
  if(props.medications.length === 0)
  {
    return(<Empty />)
  }
  else {
    const Medications = props.medications[0];
    const MedicationsKeys = Object.keys(Medications);
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
        props.medications.map((medication,index) => {
          const {id, decription, drugcode, diseasecode, type}  = medication;
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
}
export default Table;
