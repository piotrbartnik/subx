const chalk = require("chalk");
var fs = require("fs");
const { execCommand, extractFileNames } = require("../utils");

const renameSubtitles = (fileName) => {
  fs.readFile(fileName, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    fs.writeFile(
      fileName.replace(
        fileName,
        // that line needs to be adjusted to various episode name regexp. Maybe pass and argumetn with it?
        `${fileName.match(/.*e?p?.? ?(\d{2}).*/i)[1]}.srt`
      ),
      data,
      "utf8",
      function (err) {
        console.log(
          chalk.bgGreenBright(chalk.black(`${fileName} has been renamed \n`))
        );
        if (err) return console.log(err);
      }
    );
    // removal needs to be done after write file as it's removing files we need
    // execCommand(`rm -rf ${fileName}`, () =>
    //   console.log(chalk.yellow(`removed ${fileName} subtitles file\n`))
    // );
  });
};

const renameAllSubtitles = () =>
  execCommand("ls", (stdout) => {
    const allSrtFiles = extractFileNames(stdout, undefined, ".srt");

    allSrtFiles.forEach((subtitle, index) => renameSubtitles(subtitle, index));
  });

module.exports = { renameAllSubtitles };
