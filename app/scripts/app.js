//'use strict';
angular.module('soundMaster', [
  'btford.socket-io'
]).
factory('soundSocket', function (socketFactory) {
  return socketFactory();
}).
controller('AppCtrl', function ($scope, soundSocket) {
  $scope.play = function() {

    soundSocket.emit('playStream', {
      type: 'youtube', stream: 'fxa0BneKsF4'
    });
  };
});
