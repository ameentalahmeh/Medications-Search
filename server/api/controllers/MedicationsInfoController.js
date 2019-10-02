const getMedicationsInfo = require('../../database/queries/getMedicationsInfo');
const ErrorsController  = require('./ErrorsController.js');


const MedicationsController = (req, res) => {
  const { drugCode, diseaseCode, type } = req.query;
  const legalURLKeys = [ 'drugCode', 'diseaseCode', 'type' ];
  const LegalURLflag = Object.keys(req.query).map((i,index) => i === legalURLKeys[index]);

  if (type > 2 || type < 1 || Object.keys(req.query).length !== legalURLKeys.length || LegalURLflag.includes(false) ){
    ErrorsController.serverError(req,res);
  }else {
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
}
module.exports = MedicationsController;
