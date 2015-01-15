/**
 * Created by Goto on 15/01/2015.
 */

function UserValidator() {

}

UserValidator.prototype.validateUserWithoutId = function(userGiven, callback) {

    var valid = true;
    var errorMessage = "";
    try {

        if(  userGiven.nom == undefined
            || userGiven.nom == null
            || userGiven.nom == ""
        ) {
            valid = false;
            errorMessage= errorMessage + " Il manque le nom";
        }

        if(  userGiven.prenom == undefined
            || userGiven.prenom == null
            || userGiven.prenom == ""
        ) {
            valid = false;
            errorMessage= errorMessage + " Il manque le prénom";
        }

        if(  userGiven.email == undefined
            || userGiven.email == null
            || userGiven.email == ""
        ) {
            valid = false;
            errorMessage= errorMessage + " Il manque l'email";
        }

        if(  userGiven.telephone == undefined
            || userGiven.telephone == null
            || userGiven.telephone == ""
        ) {
            valid = false;
            errorMessage= errorMessage + " Il manque le téléphone";
        }

        console.log(errorMessage);
    } catch (e) {
        valid = false;
        console.log("ERREUUUURRR"); // on passe l'objet d'exception à la fonction gérant les erreurs
    }
    callback(valid, errorMessage);
};

//
//UserValidator.prototype.validateUserWithId = function(userGiven, callback) {
//
//    var valid = true;
//    var errorMessage = "";
//    if(  userGiven.id != undefined
//        && userGiven.id != null
//        && userGiven.id != ""
//    ) {
//        valid = false;
//        errorMessage= errorMessage + " Il manque le nom";
//    }
//
//    this.validateUserWithoutId(userGiven, callback(valid, errorMessage));
//
//};

module.exports = UserValidator;