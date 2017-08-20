var $           = require('gulp-load-plugins')();
var config      = require('../gulp-config');
var del         = require('del');
var gulp        = require('gulp');

gulp.task('cleanFiles', del.bind(null, [
  config.pug.dist + '**/*.html',
  config.image.dist,
  config.style.dist + '**/*.css',
  config.script.dist + '**/*.js'
]));
