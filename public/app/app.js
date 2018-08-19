var app = require('angular');
require('./resourses/js/angular-ui-router.min.js');
//url_base = 'http://192.168.0.14:2500';
url_base = 'http://localhost:2500';
APP_NAME = 'trace'
app.module(APP_NAME,['ui.router'])
.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('app', {
    name:'home',
    url:'/app',
    abstract: true,
  })
  .state('app.home', {
    name:'home',
    url:'/home',
    templateUrl : "app/templates/main.html",
    controller : 'productsCtrl'
  })
  $urlRouterProvider.otherwise("/app/home");
})

.run(function($transitions,$state) {
    $transitions.onSuccess({}, function(toState) {      
    });
})


var url = url_base;
require('./controllers/productController')
