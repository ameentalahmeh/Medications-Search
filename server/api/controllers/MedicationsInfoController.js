const getMedicationsInfo = require('../../database/queries/getMedicationsInfo');
const ErrorsController  = require('./ErrorsController.js');
var xml = require('xml');
var X2JS = require('x2js');
var x2js = new X2JS();


const MedicationsController = (req, res) => {

  var body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
     const InputsAsObject = x2js.xml2js(body).inputs;
     const legalURLKeys = [ 'drugCode', 'diseaseCode', 'type' ];
     const LegalURLflag = Object.keys(InputsAsObject).map((i,index) => i === legalURLKeys[index]);
     const {drugCode, diseaseCode, type} = InputsAsObject;
      console.log(type > 2)
     if (type > 2 || type < 1 || Object.keys(InputsAsObject).length !== legalURLKeys.length || LegalURLflag.includes(false) ){
       ErrorsController.serverError(req,res);
     }
     else {
       getMedicationsInfo(drugCode, diseaseCode, type, (err, medications) => {
           if (err) {
               ErrorsController.serverError(req,res);
             }else {
                 if (medications.rows && medications.rows.length !== 0){
                     const medicationsArr = medications.rows.map(function(r) {
                      return {
                          med:
                              [
                                { id:r.id},
                                {description: r.description},
                                {drugcode: r.drugcode},
                                {diseasecode: r.diseasecode},
                                {type: r.type},
                              ]
                            }
                          })
                     const results = [{ results: [
                                   {code:1}, {success: true}, {message: "Success"},
                                   {
                                     medications :medicationsArr
                                   }
                               ]}]

                     res.set('Content-Type', 'text/xml');
                     res.send(xml(results,{declaration:true}));
                } else {
                    const medicationsArr = [];
                     var results = [{
                    results:
                    [
                      {code:2}, {success: true}, {message: "No Medications"},
                    ]
                  }]
                     res.set('Content-Type', 'text/xml');
                     res.send(xml(results,{declaration:true}));
                  }
                }
              })
            }
        })
      }
module.exports = MedicationsController;
