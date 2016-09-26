var express = require('express');
var router = express.Router();
var db = require('../lib/db');
var passwordHash = require('password-hash');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.Category.findAll().then(function(categories){
        res.render('home.ejs', { title: 'Express', data: categories});
    });
});


//TET Routes
router.get('/test', function(req, res, next){
    db.Category.findAll().then(function(categories){
        res.send(categories);
    });
});

//Contact Us Routes
router.get('/contactus', function(req, res, next){
    db.Category.findAll().then(function(categories){
        res.render('contactus.ejs', { title: 'Express', data: categories});
    });
});


//Individual Item Route
router.get('/individual', function(req, res, next){
    db.Category.findAll().then(function(categories){
        res.render('IndividualItem.ejs', { title: 'Express'});
    });
});


//Encryption Route
router.get('/encryption', function(req, res, next){
    db.Category.findAll().then(function(categories){
        res.render('encryption.ejs', { title: 'Express', data: categories, hashed:  JSON.stringify(hashedPassword)});
    });
});


/* GET users listing. */
//Registration Route
router.post('/Registration', function(req, res, next){
    var hashedPassword = passwordHash.generate(req.body.password1);

    db.User.create({
        username: req.body.username,
        role: "normalUser",
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword
    }).then(function (){
        //successfull
        db.User.findAll().then(function (users) {
            res.render('index.ejs', { title: 'Rays of Sound'});
        });
    })
});



//Registration Route
router.get('/registration', function(req, res, next){
    db.Category.findAll().then(function(categories){
        res.render('registration.ejs', { title: 'Express', data: categories});
    });
});

//Individual Item Route
router.get('/additem', function(req, res, next){
    db.Category.findAll().then(function(categories){
        res.render('addItem.ejs', { title: 'Express', data:categories});
    });
});



//404 Routes
router.get('*', function(req, res, next){
    res.statusCode = 404;
    // res.send('None shall pass');
    res.render('404.ejs', { title: 'Express' });
});

module.exports = router;