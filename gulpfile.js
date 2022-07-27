const gulp = require("gulp");
const uglify = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline;

gulp.task("compress", function () {
  return pipeline(gulp.src("bin/*.js"), uglify(), gulp.dest("dist/bin"));
});
