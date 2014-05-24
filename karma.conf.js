// Karma configuration

module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-socket-io/mock/socket-io.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-socket-io/socket.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/*.spec.js'
    ],

    preprocessors: {
      'app/scripts/*.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    coverageReporter:{
      type : 'lcov',
      dir : 'coverage/'
    },

    port: 9876,
    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['Firefox'],
    frameworks: ['jasmine'],

    captureTimeout: 60000,

    autoWatch: true,
    singleRun: true
  });
};
