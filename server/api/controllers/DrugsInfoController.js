const getDrugsInfo = require('../../database/queries/getDrugsInfo');

const DrugsController = (req, res) => {
  const { drugCode, diseaseCode, type } = req.params;

  getDrugsInfo(drugCode, diseaseCode, type)
  .then((drugs) => {
    if (!drugs || drugs.length === 0)
    {
      return res.status(401).json({ message: 'no data exists' });
    }else {
      return res.json({ drugs });
    }
  });
}

module.exports = DrugsController;
