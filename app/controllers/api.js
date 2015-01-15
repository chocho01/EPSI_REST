/**
 * Created by Mathieu on 15/01/2015.
 */
var express = require('express');
var router = express.Router();
var request = require("request");

module.exports = function (app) {
    app.use('/api', router);
};

/* GET User. */
router.get('/users', function(req, res) {

});

router.post('/users', function(req, res) {

});

router.get('/users/:id', function(req, res) {

});

router.put('/users/:id', function(req,res) {

});

router.delete('/users/:id', function(req, res) {

});