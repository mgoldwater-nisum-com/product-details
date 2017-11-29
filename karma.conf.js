const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: "",
    files: ["tests/**/*.test.js"],
    frameworks: ['jasmine', 'jasmine-matchers'],
    preprocessors: {
      "tests/**/*.test.js": ["webpack"]
    },
    webpack: webpackConfig,
    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-webpack',
      'karma-jasmine-html-reporter'
      ],
    logLevel: config.LOG_INFO,
    reporters: ['kjhtml'],
    port: 9876,
    browsers: ["Chrome"],
    //...
  });
};