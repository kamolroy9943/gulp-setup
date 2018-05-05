
'use strict';

var gulp = require('gulp');
var sass=require('gulp-sass');
var minifyCSS=require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename=require('gulp-rename');
var changed = require('gulp-changed');


var src='./src/Assets/scss/**/*.scss';
var dest='./src/Assets/css';

// COMPILE SCSS

gulp.task('compile_scss',function(){
    gulp.src(src)
    .pipe(sass().on('error',sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix:'.min'}))
    .pipe(changed(dest))
    .pipe(gulp.dest(dest));
})

// DETECT CHANGES

gulp.task('watch_scss',function(){
    gulp.watch(src,['compile_scss']);
})

// RUN TASK

gulp.task('default',['watch_scss']);