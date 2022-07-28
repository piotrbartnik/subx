const gulp = require("gulp");
const uglify = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline;

gulp.task("build", () => {
  const dirs = [
    "bin",
    "src",
    "src/adjustSubitles",
    "src/adjustTImestamps",
    "src/extractSubtitles",
    "src/prerequisites",
    "src/renameAllSrt",
    "src/translateSrt",
    "src/vobSubToSrt",
  ];

  dirs.forEach((dir) => {
    gulp.task(`compress ${dir}`, function () {
      return pipeline(
        gulp.src(`${dir}/*.js`),
        uglify(),
        gulp.dest(`dist/${dir}`)
      );
    });
  });
});
