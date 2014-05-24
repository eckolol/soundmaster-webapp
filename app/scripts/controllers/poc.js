'use strict';

angular.module('soundMaster')
  .controller('PocCtrl', function ($scope, soundSocket) {
  $scope.play = function() {

    soundSocket.emit('playStream', {
      type: 'youtube', stream: 'fxa0BneKsF4'
    });
  };
});