'use strict';

angular.module('soundMaster')
  .controller('MainCtrl', function ($scope, soundSocket) {

    soundSocket.emit('getPlaylist');
    soundSocket.on('playlist', function (data) {
      $scope.videos=data;
    });

    $scope.toggleLikeSong = function(key) {
      soundSocket.emit('toggleLikeSong', {
        key: key
      });
    };
  });