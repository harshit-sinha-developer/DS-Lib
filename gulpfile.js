var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var browserSync = require('browser-sync');
gulp.task('js', function(){
    gulp.src('src/scripts/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts/'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: 'build'
      },
   });
});
gulp.task('default', ['js'], function(){
    gulp.watch('src/scripts/*.js', function(){
        gulp.run('js');
    })
});