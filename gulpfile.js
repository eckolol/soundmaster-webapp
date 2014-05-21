var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    karma = require('gulp-karma');

var testFiles = [
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-socket-io/mock/socket-io.js',
  'app/bower_components/angular-mocks/angular-mocks.js',
  'app/bower_components/angular-socket-io/socket.js',
  'app/scripts/app.js',
  'test/*.spec.js'
];

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});