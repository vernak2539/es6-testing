var gulp = require('gulp');
var to5 = require('gulp-6to5');
var del = require('del');

gulp.task('es6', ['clean'], function() {
    return gulp.src('./es6/**/*.js')
        .pipe(to5())
        .pipe(gulp.dest('./es5'));
});

gulp.task('clean', function(cb) {
    del(['./es5'], cb);
});
