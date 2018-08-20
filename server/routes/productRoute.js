var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/productController')

router.route('/').post( productCtrl.searchItems )

module.exports = router;
