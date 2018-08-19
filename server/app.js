var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var routes = require('./routes/routes')
var path = require('path')
config = require('./config/conf').credentials
env = require('./config/enviroment')
enviromen = process.env.NODE_ENV || 'development';

app.use(bodyParser());
app.use(cookieParser());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.static(path.join(__dirname, '..', 'public')));


for (var i = 0; i < routes.length; i++) {
  app.use('/api'+routes[i].endpoint,require(routes[i].require))
}

app.get('/',function(req,res){
  res.sendfile(path.join(__dirname, '..','public/app/index.html'))
});


app.listen(env[enviromen].port,function(){
  console.log("listen in port:: " + env[enviromen].port)
})
