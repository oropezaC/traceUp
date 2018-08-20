var request = require('request');
var clean = require('../lib/cleanMetadata').initClean;
var path = require('path');
var fs = require('fs');

function searchItems( req, res ) {

  var d = req.body;

  var config = fs.readFileSync(path.join(__dirname, '..', 'config', 'conf.json'))
  config = JSON.parse(config.toString())

  var uri = `${config.credentials.uri}?key=${config.credentials.key}&cx=${config.credentials.cx}${config.credentials.cxid}&q=${d.item}`
  request.get( uri , function (error, response, body) {

    if (!error) {

      validarBusqueda(body)
      .then(function(aw){
        if (!aw.err) {
          var items = [];
          var data = JSON.parse(body)

          clean(data.items).then(function(results) {

            res.json({ err: false, code: 200, data: results })

          })
        } else {
          res.json(aw)
        }
      })

    } else {

     res.json({ err: true, error: error, code: 500 })

   }

 });

}

function validarBusqueda(d) {
  return new Promise(function(resolve, reject) {
    d = JSON.parse(d);

    var errores = 0;
    if (d.error) {
      errores++
      resolve({ err: true, description: d.error })
    }

    if (errores === 0) {
      resolve({ err: false })
    }

  });
}

module.exports = {
  searchItems:searchItems
};
