/**
 * Created by Mathieu on 15/01/2015.
 */
var express = require('express');
var router = express.Router();
var request = require("request");
var UserFileParser = require("../models/UserFileParser");
var UserValidator = require("../models/UserValidator");
var User = require("../models/User");

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

    var userGiven = req.body;

    //est ce que les données envoyées sont valides?
    userValidator.validateUserWithoutId(userGiven, function(valid, message) {

        if (valid) {
            //on vérifie que l'id fourni existe
            userParser.getUserById(req.params.id, function(data) {
                if(data == 404) {
                    res.sendStatus(404);
                } else {
                    userToUpdate = new User();
                    userToUpdate.id = req.params.id;
                    userToUpdate.nom = userGiven.nom;
                    userToUpdate.prenom = userGiven.prenom;
                    userToUpdate.email = userGiven.email;
                    userToUpdate.telephone = userGiven.telephone;

                    userParser.addUser(userToUpdate, function(data) {
                        res.send(data);
                    });

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
        if(data == 404){
            res.sendStatus(404);
        } else {
            res.send(data);
        }
    });
});