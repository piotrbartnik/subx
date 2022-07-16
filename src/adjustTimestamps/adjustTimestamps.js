const chalk = require("chalk");
const { execCommand, extractFileNames } = require("../utils");

const adjustTimestamps = (fileName) => {
  execCommand(`srt -i shift 37 ${fileName}`, () =>
    console.log(chalk.yellow(`timestamp for ${fileName} adjusted\n`))
  );
};

const adjustAllTimestamps = () =>
  execCommand("ls", (stdout) => {
    const allSrtFiles = extractFileNames(stdout, undefined, ".srt");

    allSrtFiles.forEach((movie) => adjustTimestamps(movie));
  });

module.exports = { adjustAllTimestamps };
