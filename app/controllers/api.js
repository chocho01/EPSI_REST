/**
 * Created by Mathieu on 15/01/2015.
 */
var express = require('express');
var router = express.Router();
var request = require("request");
var fs = require("fs");

module.exports = function (app) {
    app.use('/api', router);
};

/* GET User. */
router.get('/users', function(req, res) {

    //recupere les données
    fs.readFile('./app/models/users.json', function (err, data) {
        //renvoit le fichier json
        res.send(JSON.parse(data));
    });

});

router.post('/users', function(req, res) {


});

router.get('/users/:id', function(req, res) {
   var  id= req.params.id;

        fs.readFile('./app/models/users.json', function(err, data){
            var ListPeople = (JSON.parse(data));

            ListPeople.forEach(function(user){
                console.log(id);
                if(user.id == id){
                    res.send(user);
                }
            });
        })


});

router.put('/users/:id', function(req,res) {

});

router.delete('/users/:id', function(req, res) {

});