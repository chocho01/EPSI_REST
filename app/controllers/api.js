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

rout.post('/users', function(req, res) {



});