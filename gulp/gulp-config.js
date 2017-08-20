var baseConfig = {
  sourceDir: './src/',
  distDir: './_dist/'
};
module.exports = {
  style: {
    src:          baseConfig.sourceDir + 'assets/styles/*.scss',
    all:          baseConfig.sourceDir + 'assets/styles/**/*.scss',
    ignore:       '!' + baseConfig.sourceDir + 'assets/styles/**/_*.scss',
    dist:         baseConfig.distDir + 'assets/styles/',
    autoprefixer: true,
    sourcemap:    false,
    csscomb:      true
  },
  pug: {
    src:    baseConfig.sourceDir + 'markup/**/*.pug',
    ignore: '!' + baseConfig.sourceDir + 'markup/**/_*.pug',
    dist:   baseConfig.distDir
  },
  script: {
    src:    baseConfig.sourceDir + 'assets/scripts/**/*.js',
    dist:   baseConfig.distDir + 'assets/scripts/'
  },
  image: {
    src:    baseConfig.sourceDir + 'assets/media/images/**/*',
    ignore: '!' + baseConfig.sourceDir + 'assets/media/images/**/svg/*.svg',
    dist:   baseConfig.distDir + 'assets/media/image/'
  },
  browserSync: {
    root: baseConfig.distDir
  }
};
