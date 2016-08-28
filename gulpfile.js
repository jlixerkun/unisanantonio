var gulp =require('gulp'),
    sass  = require('gulp-sass'),
    browserify = require('gulp-browserify'),
    concat  = require('gulp-concat');

var jsSources = [
  'components/js/jquery-1.12.4.js',
  // 'components/js/bluroverlay.js', //Removed until menu issue fixed
  'components/js/scripts.js'
];
    gulp.task('sass', function () {
      return gulp.src('components/sass/*.scss')
        .pipe(sass()
          .on('error', sass.logError))
        .pipe(gulp.dest('components/css'));
    });

    gulp.task('js', function () {
      gulp.src(jsSources)
      .pipe(concat('all.js'))
      .pipe(gulp.dest('components/js/'))
    });

    gulp.task('sass:watch', function () {
      gulp.watch('components/sass/*.scss', ['sass']);
    });
