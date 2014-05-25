//'use strict';
angular.module('soundMaster', [
  'ngRoute',
  'btford.socket-io'
]).
factory('soundSocket', function (socketFactory) {
  var soundmasterIoSocket = io.connect('http://'+window.location.hostname+':1337');
  
  soundmasterSocket = socketFactory({
    ioSocket: soundmasterIoSocket
  });

  return soundmasterSocket;
}).
config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/search', {
      templateUrl: 'views/search.html',
      controller: 'SearchCtrl'
    })
    .when('/poc', {
      templateUrl: 'views/poc.html',
      controller: 'PocCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});