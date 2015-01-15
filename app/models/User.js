// Example model
function User (opts) {
  if(!opts) opts = {};
  this.id = opts.id || null;
  this.nom = opts.nom || '';
  this.prenom = opts.firstname || '';
  this.email = opts.email || '';
  this.telephone = opts.phone || '';
}

module.exports = User;

