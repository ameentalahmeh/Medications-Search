const getDrugsInfo = require('../../database/queries/getDrugsInfo');


const DrugsController = (req, res) => {
  const { drugCode, diseaseCode, type } = req.query;

  getDrugsInfo(drugCode, diseaseCode, type, (err, drugs) => {
    if (err) {
      res.status(501).json({ message: 'There is an server Error' });
    }else {
      if (!drugs || drugs.length === 0){
        res.status(401).json({ message: 'No drugs exists' });
      } else {
        res.json(drugs.rows);
      }
    }
  });
}

module.exports = DrugsController;
