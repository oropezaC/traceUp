module.exports.searsClean = function (data) {
	return new Promise(function(resolve, reject) {
		var obj = {};
		console.log("heyyy");
		price(data.htmlSnippet).then(function (result) {
			console.log(result);
			// resolve()
		})
		// obj.displayLink = data.displayLink
		// obj.title = (data.pagemap.metatags != undefined || data.pagemap.metatags[0]['og:title'] != undefined)?data.pagemap.metatags[0]['og:title'] : data.title
		// obj.desc  = (data.pagemap.metatags != undefined || data.pagemap.metatags[0]['dc.subject'] != undefined)?data.pagemap.metatags[0]['dc.subject'] : data.snippet
		// obj.link =  (data.pagemap.metatags != undefined || data.pagemap.metatags[0]['og:url'] != undefined)?data.pagemap.metatags[0]['og:url'] : data.link
		// obj.img = (data.pagemap.cse_image!=undefined)?data.pagemap.cse_image[0].src : null
		// return obj
		// resolve()

	});
}


function price(d) {
	return new Promise(function(resolve, reject) {
		var priceWeb;
		var offer;
		var pricing;
		if (d.indexOf("Precio Internet:")!=-1) {
			priceWeb = d.split("Precio Internet:");
			if (priceWeb[1].indexOf('$')!=-1) {
				offer = priceWeb[1].split('$')
				console.log(offer[1]);
				if (offer[1].indexOf('.00.')!=-1) {
					pricing = offer[1].split('.00.')
					resolve({err:false,price:pricing[0]})
				}else {
						resolve({err:true,price:false})
				}
			}else {
				resolve({err:true,offer:false})
			}
		}else {
			resolve({err:true})
		}
	});
}
