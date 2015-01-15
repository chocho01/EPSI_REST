/**
 * Created by Goto on 15/01/2015.
 */
var fs = require("fs");

function UserFileParser() {
    this.filename = './app/models/users.json'; // default value
}
// class methods
UserFileParser.prototype.getUsers = function(callback) {
    fs.readFile(this.filename, function (err, data) {
        if (err) throw err;
        //renvoit le fichier json
        console.log("ok");
        callback( JSON.parse(data));
    });
};
module.exports = UserFileParser;