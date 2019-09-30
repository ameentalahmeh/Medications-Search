const fs = require('fs');
const dbConnection = require("./dbConnection");

const medicationModel = fs.readFileSync(__dirname + "/models/MedicationModel.sql", "utf8");


exports.runDbBuild = dbConnection.query(medicationModel, (err)=>{
    if (err) {
      console.log(err);
      console.log('There is the DB build error');
    }else {
      console.log('Success!!');
    }
});
