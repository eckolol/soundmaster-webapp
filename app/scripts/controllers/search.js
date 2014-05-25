'use strict';

angular.module('soundMaster')
  .controller('SearchCtrl', function ($scope, $http, $location, $cookies, soundSocket) {

  $scope.searchSong = $cookies.search;
  $scope.search = function() {
    var search = $scope.searchSong;
    if(search.length>3) {
      var dataurl ='http://gdata.youtube.com/feeds/api/videos?alt=json&q='+search;
 
      $http.get(dataurl).
        success(function(data, status, headers, config) {
          $scope.videos=data.feed.entry;
        }).
        error(function(data, status, headers, config) {
          console.log('Error');
        });
    }
    $cookies.search = search;
  };

  $scope.addSong = function(video) {
    soundSocket.emit('playStream', {
      type: 'youtube', stream: video
    });
    $location.path('/');
  };

  });