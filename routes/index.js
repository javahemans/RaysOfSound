var express = require('express');
var router = express.Router();
var db = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendStatus(200);
  db.Category.findAll().then(function(categories){
    res.render('index', { title: 'Express', data: categories});
  });
});

router.get('/test', function(req, res, next){
	db.Category.findAll().then(function(categories){
    res.send(categories);
  });
});

module.exports = router;