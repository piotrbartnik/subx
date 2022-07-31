const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task("minify", function () {
  return gulp
    .src(["./**/*.js", "!./node_modules/**/*.js"])
    .pipe(uglify({ mangle: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("copyPackageJson", function () {
  return gulp.src(["./package.json"]).pipe(gulp.dest("./dist/"));
});

gulp.task("build", gulp.series("minify", "copyPackageJson"));
