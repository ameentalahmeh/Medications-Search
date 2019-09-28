const getDrugsInfo = require('../../database/queries/getDrugsInfo');
const {pageNotFound, serverError} = require('./ErrorControllers');

const DrugsController = (req, res) => {
  const { drugCode, diseaseCode, type } = req.query;
  getDrugsInfo(drugCode, diseaseCode, type, (err, drugs) => {
    if (err) {
        serverError(null, req, res);
    }else {
      if (!drugs.rows || drugs.rows.length === 0){
        res.json({code: 1, success: true ,message: 'No drugs exists !!', drugs: []});

      } else {
        res.json({code: 2, success: true, message: 'Success!', drugs:drugs.rows});
      }
    }
  });
}
module.exports = DrugsController;
