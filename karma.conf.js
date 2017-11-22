const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: "",
    files: ["app/**/*.test.js"],
    frameworks: ['jasmine'],
    preprocessors: {
      "app/**/*.test.js": ["webpack"]
    },
    webpack: webpackConfig,
    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
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