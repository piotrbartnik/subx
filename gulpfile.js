const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task("build", function () {
  return gulp
    .src(["./**/*.js", "!./node_modules/**/*.js"])
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});
