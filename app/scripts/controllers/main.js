'use strict';

angular.module('soundMaster')
  .controller('MainCtrl', function ($scope, soundSocket) {

    soundSocket.emit('getPlaylist');
    soundSocket.on('playlist', function (data) {
      console.log(data);
      $scope.videos=data;
    });

  });