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

        //on cherche l'utilisateur
        var userFound = null;
        ListPeople.forEach(function(user){
            if(user.id == id){
                 userFound = user;
            }
        });

        //si utilisateur non trouvé, on renvoit 404 (not found)
        if( userFound == null) {
            var returnedData = 404;
        }else {
            var returnedData = userFound;
        }
        callback(returnedData);
    })
};

/*
 * Delete user by id
 */
UserFileParser.prototype.deleteUserById = function(id, callback) {
    fs.readFile(this.filename, function(err, data){

        var ListPeople = (JSON.parse(data));
        var NewListPeople = [];

        ListPeople.forEach(function(user){
            if(user.id != id){
                NewListPeople.push(user);
            }
        });

        fs.writeFile('./app/models/users.json', JSON.stringify(NewListPeople), function(){
            if(NewListPeople == null) {
                var returnedData = 404;
            }else{
                var returnedData = 200;
            }
            callback(returnedData);
        });
    })
};


UserFileParser.prototype.addUser = function(ParamUser, callback) {
    fs.readFile(this.filename, function(err, data){

        var ListPeople = (JSON.parse(data));
        var NewListPeople = [];

        ListPeople.forEach(function(existingUser){
            if(ParamUser.id != existingUser.id){
                NewListPeople.push(existingUser);
            }
        });
        //on ajoute le nouvel utilisateur
        NewListPeople.push(ParamUser);

        fs.writeFile('./app/models/users.json', JSON.stringify(NewListPeople), function(){
            if(NewListPeople == null) {
                var returnedData = 404;
            }else{
                var returnedData = 200;
            }
            callback(returnedData);
        });
    })
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