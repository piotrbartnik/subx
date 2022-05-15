const chalk = require("chalk");
const { execCommand, extractFileNames } = require("../utils");

const translateFile = (
  fileName,
  inputLanguage = "eng",
  outputLanguage = "pol"
) => {
  console.log(fileName);
  execCommand(
    `trans -i ${fileName} -o ${fileName.replace(
      ".srt",
      ".pl.srt"
    )} -l eng -t pol -b -show-original n`,
    () => console.log(chalk.greenBright(`File ${fileName} was translated \n`))
  );
};

const translateAllFiles = (inputLanguage, outputLanguage) =>
  execCommand("ls", (stdout) => {
    const allSrtSubtitleFiles = extractFileNames(stdout, undefined, ".srt");

    allSrtSubtitleFiles.forEach(translateFile, inputLanguage, outputLanguage);
  });

module.exports = { translateAllFiles };
