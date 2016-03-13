
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var babel = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var sass = require('gulp-sass');

function compile(watch) {

  var bundler = browserify('./app/Resources/assets/js/main.js', { debug:true });
  bundler.transform(babel, { presets: ['react'] });
    
  function rebundle() {
    var stream = bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./web/dist'));
  }
  
  if (watch) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      console.log('BUNDLING');
      rebundle();
    });    
  }

  rebundle();

}

gulp.task('default', ['build']);
gulp.task('build', ['browserify', 'sass']);
gulp.task('watch', ['browserify:watch', 'sass:watch']);

gulp.task('browserify', function() { return compile(); });
gulp.task('browserify:watch', function() { return compile(true); })

gulp.task('sass', function () {
  return gulp.src('./app/Resources/assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./web/dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/Resources/assets/sass/**/*.scss', ['sass']);
});
