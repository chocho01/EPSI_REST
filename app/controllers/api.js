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
    fs.readFile('models/user.json');
    //renvoit le fichier json
    res.send()
});

router.post('/users', function(req, res) {



});