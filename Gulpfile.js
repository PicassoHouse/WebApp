const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");


gulp.task("scripts", function () {
    return gulp.src(["app/scripts/**/*.js"])
        .pipe(sourcemaps.init())
        .pipe(babel())
        // .pipe(concat("all.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("app/dist"));
});

//Watch - Rerun the task when a file changes
//==========================================
gulp.task('watch', function() {
    gulp.watch("app/**/*.js", ['scripts']);
    // gulp.watch(paths.css, ['css']);
});


//default
gulp.task('default', ['watch']);