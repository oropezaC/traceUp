var app = require('angular');
require('../services/productService')
app.module(APP_NAME)
.controller('productsCtrl', function($scope,productService) {

  $scope.sortType     = 'price';
  $scope.sortReverse  = false;

  $scope.search=function (p) {
    $scope.loader=true
    $scope.products = []
    var params = {}
    params.item = p
    var liverpool = "app/resourses/images/liverpool.png";
    var walmart = "app/resourses/images/wallmart.jpeg";
    var elektra = "app/resourses/images/elektra.png";
    var linio = "app/resourses/images/linio.jpg";
    var amazon = "app/resourses/images/amazon.png";
    var sears = "app/resourses/images/sears.jpg";
    productService.searchItems(params)
    .then(function (result) {
      if (result.data.code==200) {
          console.log(result);
         var data = result.data.data
          for (var i = 0; i < data.length; i++) {
            data[i].displayLink === "www.liverpool.com.mx" ? data[i].logotrace = liverpool : false;
            data[i].displayLink === "www.walmart.com.mx" ? data[i].logotrace = walmart : false;
            data[i].displayLink === "www.elektra.com.mx" ? data[i].logotrace = elektra : false;
            data[i].displayLink === "www.linio.com.mx" ? data[i].logotrace = linio : false;
            data[i].displayLink === "www.amazon.com.mx" ? data[i].logotrace = amazon : false;
            data[i].displayLink === "www.sears.com.mx" ? data[i].logotrace = sears : false;
            $scope.products.push(data[i])
            $scope.loader=false
          }

    }else {
      console.log("error");
      $scope.error = "Consulte con el administrador"
    }
    })
  }

})
