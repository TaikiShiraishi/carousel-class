var $           = require('gulp-load-plugins')();
var config      = require('../gulp-config');
var gulp        = require('gulp');

gulp.task('imageCopy', function() {
  return gulp.src(
    [config.image.src, config.image.ignore]
  )
    .pipe( gulp.dest(config.image.dist))
});
