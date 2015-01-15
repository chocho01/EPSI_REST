/**
 * Created by Mathieu on 15/01/2015.
 */
var express = require('express');
var router = express.Router();
var request = require("request");

/* GET User. */
router.get('/', function(req, res) {
    request.get("", function(error, response, body){
        res.send(body);
    });
});