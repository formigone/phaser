// Karma configuration
// Generated on Mon May 11 2015 15:14:18 GMT-0300 (BRT)

module.exports = function(config) {
    var configs = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'tests/stubs.js',
            'src/pixi/Pixi.js',
            'src/*.js',
            'src/utils/Utils.js',
            'src/geom/*.js',
            'src/gameobjects/components/Component.js',
            'src/gameobjects/components/*.js',
            'src/gameobjects/Image.js',
            'src/animation/creature/gl-matrix.js',
            'src/core/Group.js',
            'src/**/*.js',

            'tests/specs/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            'src/Intro.js',
            'src/Outro.js',
            'src/pixi/Intro.js',
            'src/pixi/Outro.js',
            'src/PixiDefaults.js',
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },

        typescriptPreprocessor: {
            typings: [
                'typescript/pixi.d.ts',
                'typescript/phaser.d.ts',
                'typescript/p2.d.ts'
            ]
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 2667,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
// start these browsers
    browsers: ['Chrome'],

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },



        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    };

if(process.env.TRAVIS){
    configs.browsers = ['Chrome_travis_ci'];
  }

config.set(configs);
};
