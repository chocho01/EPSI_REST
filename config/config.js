var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'epsi-rest'
    },
    port: 3002
  },

  test: {
    root: rootPath,
    app: {
      name: 'epsi-rest'
    },
    port: 3002
  },

  production: {
    root: rootPath,
    app: {
      name: 'epsi-rest'
    },
    port: 3002
  }
};

module.exports = config[env];
