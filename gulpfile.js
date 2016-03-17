// Initialize our Gulp dependencies...
var 
  del         = require('del'),
  gulp        = require('gulp'),
  concat      = require('gulp-concat'),
  jshint      = require('gulp-jshint'),
  ngAnnotate  = require('gulp-ng-annotate'),
  liveserver  = require('gulp-live-server'),
  notify      = require('gulp-notify'),
  open        = require('gulp-open'),
  processhtml = require('gulp-processhtml'),
  rename      = require('gulp-rename'),
  uglify      = require('gulp-uglify'),
  util        = require('gulp-util'),
  bower       = require('main-bower-files'),
  Server      = require('karma').Server;

/**
 * Clean our dist directory. 
 */
gulp.task('clean', function() {
  return del([
    'dist'
  ]);
});

/**
 * Takes the javascript from our project,
 * runs it through jshint, concatenates the
 * files, adds the angular minification-safe 
 * dependency arrays (via ng-annotate), minifies
 * the file and places it in the dist folder.
 * Note that the build process will fail on
 * jshint errors!
 */
gulp.task('scripts', function() {
  function onJSHintError(error) {
    util.log(error.message);
    process.exit(1);
  }

  return gulp.src('src/**/*.js')
    // Run JSHint in our scripts build...
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    // Fail the build on JSHint errors
    .pipe(jshint.reporter('fail'))
    .on('error', onJSHintError)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

/**
 * Replaces the explicit dependencies in the html
 * files with the concatenated/minified versions 
 * and moves the html to the dist folder.
 */
gulp.task('processhtml', function() {
  // process html; replace <!-- build:js --> sections 
  // with concat/minified versions
  return gulp.src('./src/**/*.html')
    .pipe(processhtml())
    .pipe(gulp.dest('dist'));
}); 

/**
 * Build the vendor components. Takes the bower
 * javascript files, concatenates and minifies
 * them, then places them in the dist folder.
 */
gulp.task('vendor', function () {
  return gulp.src(bower())
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/vendor/js'));
});

/**
 * Runs karma tests once and exits.
 */
gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watches the source files and runs the 'scripts'
 * or 'processhtml' tasks to recompile and send to
 * the dist folder. 
 */
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('src/**/*.js', ['scripts']);

  // Watch .html files
  gulp.watch('src/**/*.html', ['processhtml']);
});

/**
 * Creates a live-server instance running out of
 * the dist folder. 
 */
gulp.task('serve', ['default', 'watch'], function() {
  var server = liveserver.static('dist', 3001); 
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop) 
  gulp.watch(['dist/**'], function (file) {
    server.notify.apply(server, [file]);
  });
});

// TODO: add serve-tdd to run karma tests while serving the files

/**
 * The default build task. Creates a distributable
 * release in the dist folder. Cleans the dist folder,
 * runs the Karma tests then compiles/builds the
 * application scripts, html and vendor dependencies.
 */
gulp.task('default', ['clean', 'karma'], function() {
  gulp.start(
    'scripts',
    'processhtml',
    'vendor'
  );
});
