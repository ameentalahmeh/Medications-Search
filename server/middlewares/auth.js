const  ErrorsController  = require('../api/controllers/ErrorsController.js');



const auth = (req,res,next) =>{
  const { drugCode, diseaseCode, type } = req.query;
  const legalURL = `/api/getMedicationsInfo?drugCode=${drugCode}&diseaseCode=${diseaseCode}&type=${type}`

  if (type > 2 || type < 1) {
      ErrorsController.serverError(req,res);
  }
  if (req.url !== legalURL || req.url !== '/') {
      ErrorsController.errorNotFound(req,res);
  }
  
  next(req,res);
}

module.exports = auth;
