const chalk = require("chalk");
var fs = require("fs");
const { execCommand, extractFileNames } = require("./utils");

const replaceWrongTimeStampInSrt = (fileName) => {
  fs.readFile(fileName, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/(\d{2})[\s.]?(\d{3})/g, "$1,$2");

    fs.writeFile(fileName.replace(".pl", ""), result, "utf8", function (err) {
      console.log(chalk.bgGreenBright(chalk.black(` ${fileName} adjusted \n`)));
      if (err) return console.log(err);
    });
    execCommand(`rm -rf ${fileName}`, () =>
      console.log(chalk.yellow(`removed ${fileName}\n`))
    );
  });
};

const replaceAllWrongTimestamps = () =>
  execCommand("ls", (stdout) => {
    const allSrtPLFiles = extractFileNames(stdout, undefined, ".srt").filter(
      (file) => file.match(/.pl.srt/)
    );

    allSrtPLFiles.forEach((movie) => replaceWrongTimeStampInSrt(movie));
  });

module.exports = { replaceAllWrongTimestamps };
