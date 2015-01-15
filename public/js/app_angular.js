// Generated by CoffeeScript 1.8.0
(function() {
  var app;

  app = angular.module('EtudiantEPSIApp', ['ngResource', 'ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "partials/etudiantList.html",
      controller: "ListEtudiantCtrl"
    }).when("/user/:id_user", {
      templateUrl: "partials/etudiantView.html",
      controller: "EtudiantCtrl"
    }).otherwise({
      redirectTo: '/'
    });
  });

  app.controller('ListEtudiantCtrl', [
    '$scope', 'Users', '$window', '$location', function($scope, Users, $window, $location) {
      $scope.listeUsers = [];
      Users.getAllUsers.get(function(d) {
        return $scope.listeUsers = d;
      });
      $scope.openUser = function(id) {
        return $window.open($location.absUrl() + "user/" + id);
      };

      $scope.removeUser = function(id) {
          Users.getUser.delete({'id_user': id}, function(d){
              return $scope.listeUsers = d;
          });

      };
    }
  ]);

  app.controller('EtudiantCtrl', [
    '$scope', 'Users', '$routeParams', function($scope, Users, $routeParams) {

      $scope.user = null;

      Users.getUser.get({'id_user': $routeParams.id_user}, function(d){
        return $scope.user = d;
      });

      console.log($routeParams.id_user);
    }
  ]);

  app.factory('Users', [
    '$resource', '$location', function($resource, $location) {
      return {
        getAllUsers: $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/users/', {}, {
          'get': {
            method: 'GET',
            isArray: true
          }
        }),
        getUser: $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/users/:id_user', {
          id_user: this.id_user
        }, {
          'get': {
            method: 'GET',
            isArray: false
          },
          'delete': {
            method: 'DELETE',
            isArray: true
          }
        })
      };
    }
  ]);

}).call(this);
