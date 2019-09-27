const fs = require('fs');
const dbConnection = require("./dbConnection");

const drugModel = fs.readFileSync(__dirname + "/models/DrugModel.sql", "utf8");


exports.runDbBuild = dbConnection.query(drugModel, (err)=>{
    if (err) {
      console.log(err);
      console.log('There is the DB build error');
    }else {
      console.log('Success!!');
    }
});
