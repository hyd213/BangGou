const gulp = require("gulp");
const sass = require("gulp-sass");
const watch = require("gulp-watch");
gulp.task("compile",function(){
    return gulp.src("./src/sass/*.scss")
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
})
gulp.task("jt",function(){
    return watch("./src/sass/*.scss",gulp.series("compile"));
})

gulp.task("compileBoot",function(){
    return gulp.src("./src/lib/bootstrap-sass-3.3.7/assets/stylesheets/bootstrap.scss")
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
})