var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babel = require('babelify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');

var notifyError = function() {
  return plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  });
}

var browserifyError = function(err) {
  notify.onError("Error: <%= error.message %>")(err);
  this.emit('end');
}


gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe( notifyError() )
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass({
      includePaths: require('node-bourbon')
        .with(require('font-awesome').scssPath)
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('fonts', function() {
  gulp.src(require('font-awesome').fontPath)
    .pipe( notifyError() )
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('browserify', function() {
  return browserify('./src/main.js')
    .transform(babel)
    .bundle()
    .on('error', browserifyError)
    .pipe(source('./main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/main.scss', ['sass']);
  gulp.watch('./src/main.js', ['browserify']);
  gulp.watch('./package.json', ['browserify']);
});
