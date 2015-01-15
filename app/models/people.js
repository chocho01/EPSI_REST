// Example model
function People (opts) {
  if(!opts) opts = {};
  this.id = opts.id || '';
  this.lastname = opts.lastname || '';
  this.firstname = opts.firstname || '';
  this.email = opts.email || '';
  this.phone = opts.phone || '';
}

module.exports = People;

