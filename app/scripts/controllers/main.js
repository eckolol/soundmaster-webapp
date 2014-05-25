'use strict';

angular.module('soundMaster')
  .controller('MainCtrl', function ($scope, $cookies, soundSocket) {

    soundSocket.emit('getPlaylist');
    soundSocket.on('playlist', function (data) {
      $scope.videos=data;
    });
    soundSocket.on('currentSong', function (data) {
      $scope.current=data;
    });

    soundSocket.on('clientId', function (data) {
      $cookies.id=data;
      console.log(data);
    });

    $scope.toggleLikeSong = function(key) {
      soundSocket.emit('toggleLikeSong', {
        key: key
      });
    };
  });