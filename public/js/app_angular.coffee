app = undefined
app = angular.module("EtudiantEPSIApp", [
  "ngResource"
  "ngRoute"
])
app.config ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "partials/etudiantList.html"
    controller: "ListEtudiantCtrl"
  ).when("/user/:id_user",
    templateUrl: "partials/etudiantView.html"
    controller: "EtudiantCtrl"
  ).when("/add/user",
    templateUrl: "partials/etudiantCreate.html"
    controller: "EtudiantAddCtrl"
  ).when("/edit/user/:id_user",
    templateUrl: "partials/etudiantCreate.html"
    controller: "EtudiantEditCtrl"
  ).otherwise redirectTo: "/"
  return

app.controller "EtudiantCtrl", [
  "$scope"
  "Users"
  "$routeParams"
  ($scope, Users, $routeParams) ->
    $scope.user = null
    $scope.user = Users.get
      id: $routeParams.id_user

]
app.controller "EtudiantAddCtrl", [
  "$scope"
  "Users"
  "$window"
  "$location"
  ($scope, Users, $window, $location) ->
    $scope.user = new Users()
    $scope.action = "Ajouter"

    $scope.createUser = (isValid) ->
      $scope.user.$save (d) ->
        console.log d
        $location.path "/"
        return

      return

    $scope.back = ->
      $window.history.back()
      return
]

app.controller "ListEtudiantCtrl", [
  "$scope"
  "Users"
  "$window"
  "$location"
  ($scope, Users, $window, $location) ->
    $scope.listeUsers = []
    $scope.listeUsers = Users.query()

    $scope.openUser = (id) ->
      $location.path "user/" + id
      return

    $scope.createUser = ->
      $location.path "/add/user"
      return

    $scope.removeUser = (id) ->
      if $window.confirm("Vous êtes sur ?")
        Users.delete {id: id}, (d)->
          $scope.listeUsers = d


    $scope.editUser = (id) ->
      $location.path "/edit/user/" + id
      return
]

app.controller "EtudiantEditCtrl", [
  "$scope"
  "Users"
  "$routeParams"
  "$location"
  "$window"
  ($scope, Users, $routeParams, $location, $window) ->
    $scope.action = "Modifier"
    $scope.user = null

    $scope.user = Users.get {id: $routeParams.id_user}

    $scope.createUser = (isValid) ->
      $scope.user.$update {id: $scope.user.id}, (d) ->
        $location.path "user/" + $scope.user.id
        return

      return

    $scope.back = ->
      $window.history.back()
      return
]
app.factory "Users", [
  "$resource"
  "$location"
  ($resource, $location) ->
    return $resource($location.protocol() + "://" + $location.host() + ":" + $location.port() + "/api/users/:id", {},
        update:
          method: "PUT"
          isArray: false
        delete:
          method: "DELETE"
          isArray: true

    )
]