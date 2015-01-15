/**
 * Created by Goto on 15/01/2015.
 */
var fs = require("fs");

function UserFileParser() {
    this.filename = './app/models/users.json'; // default value
}
/*
 * Get Users
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
        var returnedStatus = 200

        ListPeople.forEach(function(user){
            if(user.id != id)
                NewListPeople.push(user);
        });

        fs.writeFile('./app/models/users.json', JSON.stringify(NewListPeople), function(){

            if(NewListPeople.length == ListPeople.length)
                returnedStatus = 404;
            callback(returnedStatus);
        });
    })
};

/*
* Create a user
 */
UserFileParser.prototype.createUser = function(newUser, callback) {

    if(newUser==null || !newUser){
        callback(403)
    }
    else {
        fs.readFile(this.filename, function (err, data) {

            var ListPeople = (JSON.parse(data));

            newUser.id = ListPeople[ListPeople.length - 1] + 1
            ListPeople.push(newUser)

            fs.writeFile('./app/models/users.json', JSON.stringify(ListPeople), function () {
                callback(newUser);
            });
        })
    }
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