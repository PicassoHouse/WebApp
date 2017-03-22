const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require('gulp-uglify');

gulp.task("scripts", function () {
    return gulp.src(["app/scripts/**/*.js", "!app/scripts/**/*.spec.js"])
        .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(uglify())
            .pipe(concat("all.min.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("app/dist"));
});


gulp.task("tests", function () {
    return gulp.src(["app/scripts/**/*.spec.js"])
        .pipe(babel())
        .pipe(gulp.dest("app/tests"));
});

//Watch - Rerun the task when a file changes
//==========================================
gulp.task('watch', function() {
    gulp.watch(["app/scripts/**/*.js", "!app/scripts/**/*.spec.js"], ['scripts']);
    gulp.watch("app/scripts/**/*.spec.js", ['tests']);
});


//default
gulp.task('default', ['watch']);