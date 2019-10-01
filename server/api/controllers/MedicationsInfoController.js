const getMedicationsInfo = require('../../database/queries/getMedicationsInfo');

const MedicationsController = (req, res) => {
  const { drugCode, diseaseCode, type } = req.query;
  getMedicationsInfo(drugCode, diseaseCode, type, (err, medications) => {
    if (err) {
        res.json({success: false, message: 'There is an Server Error !!'});
    }else {
      if (!medications.rows || medications.rows.length === 0){
        res.json({code: 1, success: true ,message: 'No Medications exists !!', medications: []});

      } else {
        res.json({code: 2, success: true, message: 'Success!', medications:medications.rows});
      }
    }
  });
}
module.exports = MedicationsController;
