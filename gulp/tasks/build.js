var $           = require('gulp-load-plugins')();
var config      = require('../gulp-config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence(
    'cleanFiles',
    [
      'style',
      'pug',
      'browserify',
      'imageCopy'
    ],
    callback
  );
});
