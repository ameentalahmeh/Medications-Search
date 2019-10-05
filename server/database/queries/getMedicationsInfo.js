const dbConnection = require("../dbConnection");

module.exports = (drugCode, diseaseCode, type, cb) => {

  const inputs = [drugCode, diseaseCode, type];

  const inputsAsString = ['drugCode','diseaseCode','type'];

  const selected  = inputs.filter((i,index) => i !== inputsAsString[index])

  const selectedIdxs  = [];
  inputs.filter((i,index) => {
    if(i !== inputsAsString[index]) selectedIdxs.push(index)
  })

  var querySearch = '';
  var queryValues;

  if (selected.length === 0) {
    querySearch = 'SELECT * FROM drug';
  }
  else {
    var  queryItemsTags = '';
    selectedIdxs.forEach((i) => queryItemsTags = queryItemsTags + (inputsAsString[i] + ','));
    queryItemsTags = queryItemsTags.slice(0,-1);



    var queryItemsIndexs = '';
    selected.forEach((i,index) => queryItemsIndexs = queryItemsIndexs + ('$' + (index+1) + ','))
    queryItemsIndexs = queryItemsIndexs.slice(0,-1);


    querySearch = `SELECT * FROM drug WHERE (${queryItemsTags}) = (${queryItemsIndexs})`;
    queryValues =  selected;

  }
  dbConnection.query(querySearch, selected, (err, medications) => {
      if (err) {
        cb(err)
      }else {
        cb(null,medications);
      }
  });
}
