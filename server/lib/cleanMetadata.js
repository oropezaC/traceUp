var amazonLib = require('./amazon-lib').amazonClean;
var linioLib = require('./linio-lib').linioClean
var searsLib = require('./sears-lib').searsClean
var walmartLib = require('./walmart-lib').walmartClean


module.exports.initClean = function (data) {
  return new Promise(function(resolve, reject) {
    var productsReturn  = []
    data.forEach(function (item) {
      item.displayLink === "www.amazon.com.mx" ? productsReturn.push(amazonLib(item)) : false
      item.displayLink === "www.linio.com.mx" ? productsReturn.push(linioLib(item)) : false
      item.displayLink === "www.sears.com.mx" ? productsReturn.push(searsLib(item)) : false
      item.displayLink === "www.walmart.com.mx" ? productsReturn.push(walmartLib(item)) : false
    })
    resolve(productsReturn)

  });

}
