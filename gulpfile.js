var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babel = require('babelify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var uglify = require('gulp-uglify');
var server  = require('gulp-server-livereload');
var fontAwesome = require('./font-awesome-paths');

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
        .with(fontAwesome.scssPath)
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('fonts', function() {
  gulp.src(fontAwesome.fontPath)
    .pipe( notifyError() )
    .pipe(gulp.dest('./app/fonts'));
});

gulp.task('normalize', function() {
  gulp.src(require.resolve('normalize.css'))
    .pipe( notifyError() )
    .pipe(gulp.dest('./app/css'));
});

gulp.task('browserify', function() {
  return browserify('./js/main.js', {debug: true})
    .transform(babel)
    .bundle()
    .on('error', browserifyError)
    .pipe(source('./main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/main.scss', ['sass']);
  gulp.watch('./js/main.js', ['browserify']);
  gulp.watch('./package.json', ['browserify']);
});

gulp.task('server', function () {
  return gulp.src('app')
    .pipe(server({
      livereload: true
    }));
});

gulp.task('default', ['browserify',
                      'sass',
                      'fonts',
                      'normalize']);

gulp.task('start', ['default', 'watch', 'server']);
