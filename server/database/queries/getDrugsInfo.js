const dbConnection = require("../dbConnection");

const getDrugsInfo = (drugCode, diseaseCode, type) => dbConnection.query(
  `SELECT * FROM drug
   WHERE drugCode = ${drugCode} AND diseaseCode = ${drugCode} AND type = ${type}`,
   (err, drugs) => {
    if (err) {
      res.status(501).json({ message: 'There is an Server Error' });
    }else {
      res.json({ drugs });
    }
});
