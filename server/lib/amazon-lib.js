module.exports.amazonClean = function (data) {
  var obj = {}
  obj.displayLink = data.displayLink
  obj.title = (data.pagemap.metatags != undefined )?data.pagemap.metatags[0]['og:title']:data.title;
  obj.desc = (data.pagemap.metatags != undefined )?data.pagemap.metatags[0]['og:description']:data.snippet
  obj.link  = (data.pagemap.metatags != undefined )?data.pagemap.metatags[0]['og:url']:data.link;
  obj.img   = (data.pagemap.metatags != undefined )?data.pagemap.metatags[0]['og:image']:data.pagemap.cse_image[0].src
  return obj
};
