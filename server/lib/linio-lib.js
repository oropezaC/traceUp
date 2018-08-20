module.exports.linioClean = function (data) {
  var obj = {}
  var products = data.pagemap.product
  var offer = (data.pagemap.offer != null || data.pagemap.offer != undefined) ? data.pagemap.offer : null
  obj.displayLink = data.displayLink
  obj.title = products[0].name;
  obj.desc = null;
  obj.link = (offer != null) ? data.displayLink + offer[0].url : data.link
  obj.img = 'https:' + products[0].image
  return obj
};
