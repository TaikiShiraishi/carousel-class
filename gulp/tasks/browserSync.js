var $           = require('gulp-load-plugins')();
var config      = require('../gulp-config');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function() { // ローカルサーバー立ち上げ
  browserSync({
    server: {
      baseDir: config.browserSync.root
    },
    open:        'external',
    reloadDelay: 800
  });
});

gulp.task('bsReload', function(){
  browserSync.reload();
});

gulp.task('bsStream', function(){
  browserSync.reload({stream: true});
});
