module.exports.walmartClean=function (data) {
	var obj = {}
	obj.displayLink = data.displayLink
	obj.title = (data.pagemap.metatags[0]['title']!=undefined)?data.pagemap.metatags[0]['title']:data.title
	obj.desc = (data.pagemap.product!=undefined)?data.pagemap.product[0].description:data.snippet
	obj.link  = data.link
	obj.img   = (data.pagemap.product!=undefined)?data.pagemap.product[0].image:data.pagemap.cse_image[0].src
	obj.offer = (data.pagemap.offer!=undefined)?data.pagemap.offer[0].price:null
	return obj

}