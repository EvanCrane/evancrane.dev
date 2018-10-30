// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  htmltidy = require('gulp-htmltidy');
cssbeautify = require('gulp-cssbeautify');
cleanCSS = require('gulp-clean-css');
minify = require('gulp-minify');

// development mode
devBuild = (process.env.NODE_ENV !== 'devlopment'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  };

gulp.task('htmltidy', function () {
  return gulp.src('./*.html')
    .pipe(htmltidy({
      hideComments: true,
      indent: true
    }))
    .pipe(gulp.dest('build/'));;
});

gulp.task('csstidy', function () {
  return gulp.src('./src/styles/*.css')
    .pipe(cssbeautify({
      autosemicolon: true
    }))
    .pipe(gulp.dest('build/src/styles'));
});

gulp.task('minify-css', () => {
  return gulp.src('./src/styles/*.css')
    .pipe(cleanCSS({
      debug: true
    }, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('build/src/styles/min'));
});

gulp.task('compress', function () {
  gulp.src('./src/scripts/*.js')
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: '.min.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '.min.js', '-min.js']
    }))
    .pipe(gulp.dest('build/src/scripts'))
});