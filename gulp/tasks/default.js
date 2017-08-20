var $           = require('gulp-load-plugins')();
var config      = require('../gulp-config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence(
    ['build'],
    'watch',
    'browserSync',
    callback
  );
});
