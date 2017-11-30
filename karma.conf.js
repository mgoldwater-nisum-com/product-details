const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: "",
    files: [
      {pattern: "app/**/*.test.js", watched:true,served:true,included:true}, {pattern: 'spec/javascripts/fixtures/*.hbs', watched:true,served:true,included:false},
      './app/templates/*.hbs',
      'node_modules/handlebars/dist/handlebars.min.js',
      './node_modules/jquery/dist/jquery.min.js',
    ],
    frameworks: ['jasmine-jquery', 'jasmine', 'jasmine-matchers'],
    preprocessors: {
      "app/**/*.test.js": ['webpack'],
      '**/*.hbs': ['handlebars', 'webpack']
    },
    handlebarsPreprocessor: {
      templates: "Handlebars.templates"
    }, 
    webpack: webpackConfig,
    plugins : [
      'karma-handlebars-preprocessor',
      'karma-jquery',
      'karma-jasmine-jquery',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter'
      ],
    logLevel: config.LOG_INFO,
    reporters: ['kjhtml'],
    port: 9876,
    browsers: ["Chrome"],
    //...
  });
};