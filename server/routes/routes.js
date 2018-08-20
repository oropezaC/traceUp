var routeProduct = require('./productRoute')

var routes =[
  { name:"productos", endpoint:"/products", require: __dirname + "/productRoute" }
]

module.exports = routes;
