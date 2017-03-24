const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const sass = require('gulp-sass');

//ES6 plugins
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const ngAnnotate = require('gulp-ng-annotate');


//Scrips - Transpile all ES6 Javascript files
//==========================================
gulp.task("scripts", function () {
    let bundler = browserify({
        entries: 'src/app.js',
        debug: true
    });
    bundler.transform(babelify);
    bundler.bundle()
        .on('error', (err) => console.error(err))
        .pipe(source('all.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});


// SASS - Compile and concat all Sass files
//==========================================
gulp.task("sass", function () {
    return gulp.src(['src/**/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('dist'));
});


//Watch - Rerun the task when a file changes
//==========================================
gulp.task('watch', function() {
    gulp.watch(["src/**/*.js", "!src/**/*.spec.js"], ['scripts']);
    gulp.watch("src/**/*.spec.js", ['tests']);
    gulp.watch("src/**/*.scss", ['sass']);
});


//default
gulp.task('default', ['watch', 'scripts', 'sass']);