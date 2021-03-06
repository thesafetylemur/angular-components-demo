// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // Note that order is important!!!
      '../bower_components/angular/angular.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/randomcolor/randomColor.js',
      '../src/**/*.js',
      '**/*.js'
    ],
    exclude: [
      'karma.conf.js'
    ],
    plugins : [
      'karma-jasmine', 
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-coverage'
    ],
    preprocessors: {
      '../src/**/*.js': ['coverage']
    },
    reporters: ['progress','coverage'],
    coverageReporter : {
      type : 'html',
      dir : 'coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false
  });
};
