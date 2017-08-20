var $           = require('gulp-load-plugins')();
var babelify    = require('babelify');
var browserify  = require('browserify');
var config      = require('../gulp-config');
var buffer      = require('vinyl-buffer');
var gulp        = require('gulp');
var source      = require("vinyl-source-stream");

gulp.task('browserify', function() {
  browserify({
    entries: './src/assets/scripts/main.js',
    extensions: [".js"],
    debug: true
  })
    .transform(babelify, {
      presets: ['es2015'],
      sourceMapsAbsolute: true
    })
    .bundle()
    .on("error", function (err) {
      console.log("Error : " + err.message);
      this.emit("end");
    })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest(config.script.dist)); // 出力
});
