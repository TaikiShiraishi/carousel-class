var $           = require('gulp-load-plugins')();
var config      = require('../gulp-config');
var gulp        = require('gulp');

gulp.task('pug', function() {
  gulp.src([config.pug.src, config.pug.ignore])
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')})) // エラー時にgulpを止めず、通知を行う
    .pipe($.pug({
      'pretty': true // 改行+インデント付きで出力する
    }))
    .pipe(gulp.dest(config.pug.dist)); // 出力
});
