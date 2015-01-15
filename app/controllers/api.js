/**
 * Created by Mathieu on 15/01/2015.
 */
var express = require('express');
var router = express.Router();
var request = require("request");
var UserFileParser = require("../models/UserFileParser");
var UserValidator = require("../models/UserValidator");
//var User = require("../models/User");

var userParser = new UserFileParser();
var userValidator = new UserValidator();
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
    console.log(req.body);
    userValidator.validateUserWithoutId(req.body, function(valid, message) {
        if (valid) {
            userParser.createUser(req.body, function(data) {
                if(data == 403) {
                    res.sendStatus(403);
                } else {
                    res.send(data)
                }
            });
        } else {
            res.sendStatus(400);
            console.log(message);
        }
    })

});

router.get('/users/:id', function(req, res) {
    var  id= req.params.id;

    userParser.getUserById(id, function(data) {
        if(data == 404) {
            res.sendStatus(404);
        } else {
            //renvoit le fichier json
            res.send(data);
        }

    });
});

router.put('/users/:id', function(req, res) {

    console.log(req.body.nom);
    userValidator.validateUserWithoutId(req.body, function(valid, message) {

        if (valid) {
            userParser.getUserById(req.params.id, function(data) {
                if(data == 404) {
                    res.sendStatus(404);
                } else {
                    User.nom = req.body.nom;
                    //sinon on met à jour l'utilisateur
                }
            });
        } else {
            res.sendStatus(400);
            console.log(message);
        }

    });


});

router.delete('/users/:id', function(req, res) {
    var  id= req.params.id;
    userParser.deleteUserById(id, function(data){
        res.send(data);
    });
});