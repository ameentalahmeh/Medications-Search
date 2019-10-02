const getMedicationsInfo = require('../../database/queries/getMedicationsInfo');
const ErrorsController  = require('./ErrorsController.js');

const auth = (req,res,next) =>{
  const { drugCode, diseaseCode, type } = req.query;
  const legalURL = `/api/getMedicationsInfo?drugCode=${drugCode}&diseaseCode=${diseaseCode}&type=${type}`

  if (type > 2 || type < 1) {
      ErrorsController.serverError(req,res);
  }
  if (req.url !== legalURL || req.url !== '/') {
      console.log(legalURL);
      ErrorsController.errorNotFound(req,res);
  }
}

const MedicationsController = (req, res) => {
  const { drugCode, diseaseCode, type } = req.query;
    auth(req,res);
    getMedicationsInfo(drugCode, diseaseCode, type, (err, medications) => {
      if (err) {
        ErrorsController.serverError(req,res);
      }else {
        if (medications.rows && medications.rows.length !== 0){
          res.json({code: 1, success: true, message: 'Success!', medications:medications.rows});
        } else {
          res.json({code: 2, success: true ,message: 'No Medications exists !!'});
        }
      }
    });
}
module.exports = MedicationsController;
