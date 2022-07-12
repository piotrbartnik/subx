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
        /.*/,
        `${fileName.replace(/.*E?P?\s?(\d{1,3}).*/gi, "$1")}.srt`
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
    execCommand(`rm -rf ${fileName}`, () =>
      console.log(chalk.yellow(`removed ${fileName} subtitles file\n`))
    );
  });
};

const renameAllSubtitles = () =>
  execCommand("ls", (stdout) => {
    const allSrtFiles = extractFileNames(stdout, undefined, ".srt");

    allSrtFiles.forEach((subtitle, index) => renameSubtitles(subtitle, index));
  });

module.exports = { renameAllSubtitles };
