/**
 * Created by Mathieu on 15/01/2015.
 */
var express = require('express');
var router = express.Router();
var request = require("request");
var UserFileParser = require("../models/UserFileParser");

var userParser = new UserFileParser();
module.exports = function (app) {
    app.use('/api', router);
};

/* GET User. */
router.get('/users', function(req, res) {

    userParser.getUsers(function(data) {
        //renvoit le fichier json
        res.send(data);
    });


});

router.post('/users', function(req, res) {


});

router.get('/users/:id', function(req, res) {
   var  id= req.params.id;

    userParser.getUserById(id, function(data) {
        //renvoit le fichier json
        res.send(data);
    });
});

router.put('/users/:id', function(req,res) {

});

router.delete('/users/:id', function(req, res) {
    var  id= req.params.id;

    userParser.deleteUserById(id, function(data){
        //
        res.send(data);
    });

});