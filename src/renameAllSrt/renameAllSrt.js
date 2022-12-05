const chalk = require("chalk");
var fs = require("fs");
const { execCommand, extractFileNames } = require("../utils");

const renameSubtitles = (fileName, fileNamePattern) => {
  fs.readFile(fileName, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    const fileNamePatterRegexp = new RegExp(fileNamePattern);

    fs.writeFile(
      fileName.replace(
        fileName,
        `${fileName.match(fileNamePatterRegexp)[1]}.srt`
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
  });
  execCommand(`rm -rf "${fileName}"`, () =>
    console.log(chalk.yellow(`removed ${fileName} subtitles file\n`))
  );
};

const renameAllSubtitles = (fileNamePattern) =>
  execCommand("ls", (stdout) => {
    const allSrtFiles = extractFileNames(stdout, undefined, ".srt");

    allSrtFiles.forEach((subtitle) =>
      renameSubtitles(subtitle, fileNamePattern)
    );
  });

module.exports = { renameAllSubtitles };
