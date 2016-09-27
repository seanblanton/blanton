var gulp = require('gulp');
    scss = require('gulp-scss');
    postcss = require('gulp-postcss');
    precss = require('precss');
    rename = require('gulp-rename');
    sourcemaps = require('gulp-sourcemaps');
    cssnano = require('cssnano');
    autoprefixer = require('gulp-autoprefixer');
    browserSync = require('browser-sync').create();
    reload = browserSync.reload;
    customMedia = require("postcss-custom-media")
    map = require('postcss-map');
    conditionals = require('postcss-conditionals');
    mixins = require('postcss-mixins');
    simplevars = require('postcss-simple-vars');
    nested = require('postcss-nested');
    clean = require('gulp-clean');
    child = require('child_process');
    gutil = require('gulp-util');

var devip = require('dev-ip');
devip();

const dirs = {
  css: 'css/main.css',
  dest: '_site',
};

const paths = {   
          jekyll: ['index.html', '_posts/*', '_layouts/*', '_includes/*' , 'assets/*', 'assets/**/*']
      };

var breakpoints = {
  basePath: 'css/',
  maps: ['breakpoints.yml']
};


// POSTCSS
gulp.task('css', function() {
  var processors = [
    precss,
    map(breakpoints),
    simplevars,
    conditionals,
    autoprefixer,
    cssnano
  ];


  return gulp.src(`${dirs.css}`)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(`${dirs.dest}/css/`));
});


// RUN JEKYLL BUILD
gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});


// BROWSER STACK
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "_site"
    }
  });
});


// WATCH TASK
gulp.task('watch', () => {  
  gulp.watch('css/**/*.*', ['css', browserSync.reload]);
  gulp.watch(paths.jekyll, ['jekyll', browserSync.reload]);
});

// DEFAULT TASK
gulp.task('default', ['css', 'jekyll', 'browser-sync', 'watch']);
