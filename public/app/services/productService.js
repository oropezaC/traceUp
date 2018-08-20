var angular = require('angular');

angular.module(APP_NAME)
.service('productService', function($http) {

  this.searchItems=function(params){
		return $http.post(url_base+'/api/products',params);
	}
})
