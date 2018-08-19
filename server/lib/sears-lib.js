module.exports.searsClean = function (data) {
	var obj = {};
	obj.displayLink = data.displayLink
	obj.title = (data.pagemap.metatags != undefined || data.pagemap.metatags[0]['og:title'] != undefined)?data.pagemap.metatags[0]['og:title'] : data.title
	obj.desc  = (data.pagemap.metatags != undefined || data.pagemap.metatags[0]['dc.subject'] != undefined)?data.pagemap.metatags[0]['dc.subject'] : data.snippet
	obj.link =  (data.pagemap.metatags != undefined || data.pagemap.metatags[0]['og:url'] != undefined)?data.pagemap.metatags[0]['og:url'] : data.link
	obj.img = (data.pagemap.cse_image!=undefined)?data.pagemap.cse_image[0].src : null
	return obj
}