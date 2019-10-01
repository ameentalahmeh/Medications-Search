const dbConnection = require("../dbConnection");

module.exports = (diseaseCode, type, cb) => {

  const inputs = [drugCode, diseaseCode, type];

  const inputsAsString = ['drugCode','diseaseCode','type'];
  const selected  = inputs.filter((i,index) => i !== inputsAsString[index])

  var querySearch = '';
  var queryValues;

  if (selected.length === 0) {
    querySearch = 'SELECT * FROM drug';
  }
  else {
    var  queryItems = '';
    selected.forEach((i,index) => queryItems = queryItems + (inputsAsString[inputs.indexOf(i)] + ','));
    queryItems = queryItems.slice(0,-1);


    var queryItemsIndexs = '';
    selected.map((i,index) => queryItemsIndexs = queryItemsIndexs + ('$' + (index+1) + ','))
    queryItemsIndexs = queryItemsIndexs.slice(0,-1);


    querySearch = `SELECT * FROM drug WHERE (${queryItems}) = (${queryItemsIndexs})`;
    queryValues =  selected;

  }
  console.log(querySearch);
  dbConnection.query(querySearch, selected, (err, medications) => {
      if (err) {
        cb(err)
      }else {
        cb(null,medications);
      }
  });
}
