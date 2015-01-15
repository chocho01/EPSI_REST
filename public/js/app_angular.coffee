app = angular.module('EtudiantEPSIApp', [
  'ngResource'
  'ngRoute'
])

app.config ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "partials/etudiantList.html"
    controller: "ListEtudiantCtrl"
  ).when "/user/:id_user",
    templateUrl: "partials/etudiantView.html"
    controller: "EtudiantCtrl"
  .otherwise
      redirectTo: '/'

  return



app.controller 'ListEtudiantCtrl', [
  '$scope', 'Users', '$window', '$location'
  ($scope, Users, $window, $location) ->

    $scope.listeUsers = []

    Users.getAllUsers.get (d)->
      $scope.listeUsers = d

    $scope.openUser = (id)->
      $window.open $location.absUrl()+"user/"+id

    $scope.removeUser = (id)->
#      $window.open $location.absUrl()+"user/"+id

    return
]

app.controller 'EtudiantCtrl', [
  '$scope', '$routeParams'
  ($scope, $routeParams) ->
    console.log $routeParams.id_user
    return
]

app.factory 'Users', [
  '$resource'
  '$location'
  ($resource, $location) ->
    return {
    getAllUsers : $resource $location.protocol()+'://'+$location.host()+':'+$location.port()+'/api/users/',
      {},
      {
        'get': {
          method: 'GET'
          isArray: true
        }
      }
    getUser: $resource $location.protocol()+'://'+$location.host()+':'+$location.port()+'/api/users/:id_user',
      {
        id_user: @id_user
      },
      {
        'get': {
          method: 'GET'
          isArray: true
        },
        'delete': {
          method: 'DELETE'
          isArray: true
        }
      }
    }
]