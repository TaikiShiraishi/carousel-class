var $           = require('gulp-load-plugins')();
var config      = require('../gulp-config');
var gulp        = require('gulp');

gulp.task('watch', function(){
  $.watch(config.script.src, function(){ // js監視
    gulp.start('browserify');
  });
  $.watch(config.style.all, function(){ // styles監視
    gulp.start('style');
  });
  $.watch(config.pug.src, function(){ // jade監視
    gulp.start('pug');
  });
  $.watch(config.image.src, function(){ // 画像監視
    gulp.start('imageCopy');
  });
  $.watch(config.browserSync.root + '**/*', function(){ // distを監視
    gulp.start('bsReload');
  });
});
