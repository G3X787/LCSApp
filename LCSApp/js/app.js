
var LeagueApp = angular.module('LeagueApp', ['ionic','ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

LeagueApp.config(function($routeProvider) {
  $routeProvider
  .when('/list', {
    controller: 'StatsController',
    templateUrl: 'list.html'
  })
  .when('/details/:playerId', {
    controller: 'DetailsController',
    templateUrl: 'details.html'
  })
  .otherwise({redirectTo:'/list'});
});

LeagueApp.controller('StatsController', function($scope,$http){
  $scope.loadPlayers = function(){
    $http.get("http://davidkrent.com/lcs/data.php")
    .success(function(response){
      console.log(response);
      $scope.players = response;
    })
    .finally(function(){
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
});

LeagueApp.controller('DetailsController', function($scope,$routeParams,$http){
  $http.get("http://davidkrent.com/lcs/details.php?id="+$routeParams.playerId).success(function(response){
    console.log(response);
    $scope.details = response;
  });
});