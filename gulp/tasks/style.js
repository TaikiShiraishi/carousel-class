var $              = require('gulp-load-plugins')({
  rename: {
    'gulp-ruby-sass': 'sass'
  }
});
var config         = require('../gulp-config');
var gulp           = require('gulp');
var browserSync    = require('browser-sync');

gulp.task("style", function() {
  return $.sass([config.style.src, config.style.ignore], {
    style: 'expanded',
    bundleExec: true
  })
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')})) //エラーがあってもgulpを止めず、通知を行う
    .pipe($.autoprefixer({
      browsers: ['last 2 version'],
    }))
    .pipe($.if(config.style.csscomb, $.csscomb())) // csscombの設定に則ってプロパティを並び替え
    .pipe(gulp.dest(config.style.dist)) // 出力する
    .pipe(browserSync.stream());
});
