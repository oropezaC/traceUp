var amazonLib = require('./amazon-lib').amazonClean;
var linioLib = require('./linio-lib').linioClean
var searsLib = require('./sears-lib').searsClean
var walmartLib = require('./walmart-lib').walmartClean


module.exports.initClean = function (data) {
  // console.log(data);
  console.log("heyyyy");
  return new Promise(function(resolve, reject) {
    // var productsReturn  = []
    Promise.each(data,function (item) {
      // console.log(item);
      return new Promise(function(resolve, reject) {
        switch (item.displayLink) {
          case 'www.sears.com.mx':
            searsLib(item).then(function (result) {
              // console.log(result);
              resolve()
            })
            break;
            case 'www.walmart.com.mx':
            // walmartLib(item).then(function (result) {
            //   console.log(result);
            //   // resolve(result)
            // })
            resolve()
              break;
          default:
          resolve()
        }
      });
    })

    // data.forEach(function (item) {
    //   item.displayLink === "www.sears.com.mx" ? searsLib(item) : false
    //   // item.displayLink === "www.amazon.com.mx" ? productsReturn.push(amazonLib(item)) : false
    //   // item.displayLink === "www.linio.com.mx" ? productsReturn.push(linioLib(item)) : false
    //   // item.displayLink === "www.sears.com.mx" ? productsReturn.push(searsLib(item)) : false
    //   // item.displayLink === "www.walmart.com.mx" ? productsReturn.push(walmartLib(item)) : false
    // })
    // resolve(productsReturn)

  });

}
