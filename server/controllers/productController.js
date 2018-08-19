var request = require('request');
var clean = require('../lib/cleanMetadata').initClean;

function searchItems(req,res) {
  request.get(config.uri+'?key='+config.key+'&cx='+config.cx+config.cxid+'&q='+req.body.item, function (error, response, body) {
    var items = [];
    if (!error) {
        var data = JSON.parse(body)
        clean(data.items).then(function(results) {
        res.json({err:false,code:200,data:results})
      })        
    }else{
     res.json({err:true,error:error,code:500}) 
   }
 });
}

module.exports = {
  searchItems:searchItems
};
