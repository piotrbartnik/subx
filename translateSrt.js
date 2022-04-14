const chalk = require("chalk");
var fs = require("fs");
const { execCommand, extractFileNames } = require("./utils");

const translateFile = (fileName) => {
  console.log(fileName);
  execCommand(
    `trans -i ${fileName} -o ${fileName.replace(
      ".srt",
      ".pl.srt"
    )} -t pol -b -show-original n`,
    () => console.log(chalk.greenBright(`File ${fileName} was translated \n`))
  );
};

const translateAllFiles = () =>
  execCommand("ls", (stdout) => {
    const allSrtSubtitleFiles = extractFileNames(stdout, undefined, ".srt");

    allSrtSubtitleFiles.forEach(translateFile);
  });

translateAllFiles();
