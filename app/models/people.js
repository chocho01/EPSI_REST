// Example model
function People (opts) {
  if(!opts) opts = {};
  this.id = opts.id || '';
  this.lastname = opts.lastname || '';
  this.firstname = opts.firstname || '';
  this.email = opts.email || '';
  this.phone = opts.phone || '';
}

function getUsers() {
  //recupere les données
  fs.readFile('./app/models/users.json', function (err, data) {
    //renvoit le fichier json
    return JSON.parse(data);
  });

}

module.exports = People;

