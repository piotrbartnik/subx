// trans -i Pinocchio.E01.DC.BluRay\[MkvDrama.com\].srt -o Pinocchio.E01.DC.BluRay\[MkvDrama.com\].pl.srt -t pol -b -show-original n

const chalk = require("chalk");
var fs = require("fs");
const { execCommand, extractFileNames } = require("./execCommand");

const tranlateFile = (fileName) => {
  console.log(fileName);
  execCommand(
    `trans -i ${fileName} -o ${fileName.replace(
      ".srt",
      ".pl.srt"
    )} -t pol -b -show-original n`,
    () => console.log(chalk.greenBright(`translated ${fileName}\n`))
  );
};

const translateAllFiles = () =>
  execCommand("ls", (stdout) => {
    const allSrtPLFiles = extractFileNames(stdout, undefined, ".srt");

    allSrtPLFiles.forEach((subtitlesFile) => tranlateFile(subtitlesFile));
  });

translateAllFiles();
