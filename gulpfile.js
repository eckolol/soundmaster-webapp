var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    karma = require('gulp-karma'),
    connect = require('gulp-connect');

var testFiles = [
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-socket-io/mock/socket-io.js',
  'app/bower_components/angular-route/angular-route.js',
  'app/bower_components/angular-mocks/angular-mocks.js',
  'app/bower_components/angular-socket-io/socket.js',
  'app/scripts/app.js',
  'app/scripts/controllers/poc.js',
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

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 8000,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('dev', ['connect', 'watch']);