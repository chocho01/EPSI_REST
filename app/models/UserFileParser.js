/**
 * Created by Goto on 15/01/2015.
 */
var fs = require("fs");

function UserFileParser() {
    this.filename = './app/models/users.json'; // default value
}
/*
 GetUsers
 */
UserFileParser.prototype.getUsers = function(callback) {
    fs.readFile(this.filename, function (err, data) {
        if (err) throw err;
        //renvoit le fichier json
        callback( JSON.parse(data));
    });
};
/*
 * Get User By Id
 */
UserFileParser.prototype.getUserById = function(id, callback) {
    fs.readFile(this.filename, function(err, data){
        var ListPeople = (JSON.parse(data));

        ListPeople.forEach(function(user){
            if(user.id == id){
                callback( user);
            }
        });
    })
};

/*
 * Delete user by id
 */
UserFileParser.prototype.deleteUserById = function(id, callback) {
    fs.readFile(this.filename, function(err, data){

        var ListPeople = (JSON.parse(data));
        var NewListPeople = {};

        ListPeople.forEach(function(user){
            if(user.id != id){
                NewListPeople.push(user);
            }
        });

        fs.writeFile('users.json', NewListPeople.toJSON(), function(){
            console.log('Sa marche)');
        })
    });


};


/*
 setUsers
 */
UserFileParser.prototype.setUsers = function(users, callback) {
    fs.writeFile(this.filename, users,  function (err) {
        if (err) throw err;
        callback();
    });
};

module.exports = UserFileParser;