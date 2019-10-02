const ErrorsController  = require('./ErrorsController.js');

const auth = (err,req,res,next) =>{
  const { drugCode, diseaseCode, type } = req.query;
  const legalURLKeys = [ 'drugCode', 'diseaseCode', 'type' ];
  const LegalURLflag = Object.keys(req.query).map((i,index) => i === legalURLKeys[index])
  if (type > 2 || type < 1 || LegalURLflag.includes(false) || Object.keys(req.query).length !== 3) {
      console.log('Server Error');
      ErrorsController.serverError(req,res);
  }else {
    next(req);
  }
}

module.exports = auth;
