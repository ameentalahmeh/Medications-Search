const getMedicationsInfo = require('../../database/queries/getMedicationsInfo');
const ErrorsController  = require('./ErrorsController.js');



const MedicationsController = (req, res) => {
  const { drugCode, diseaseCode, type } = req.query;
  const legalURLKeys = [ 'drugCode', 'diseaseCode', 'type' ]

  if (type > 2 || type < 1 || Object.keys(req.query) !== legalURLKeys) {
      console.log('Server Error');
      ErrorsController.serverError(req,res);
  }
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
