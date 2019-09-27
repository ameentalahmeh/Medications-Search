const dbConnection = require("../dbConnection");

module.exports = (drugCode, diseaseCode, type, cb) => dbConnection.query(
  'SELECT * FROM drug WHERE (drugCode, diseaseCode, type) = ($1,$2,$3) ',
   [drugCode, diseaseCode, type],
   (err, drugs) => {
    if (err) {
      cb(err)
    }else {
      cb(null,drugs);
    }
});
