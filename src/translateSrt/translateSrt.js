const chalk = require("chalk");
const { execCommand, extractFileNames } = require("../utils");

const translateFile = (
  fileName,
  inputLanguage = "eng",
  outputLanguage = "pol"
) => {
  console.log(
    chalk.magentaBright(
      `Translating ${fileName} from ${inputLanguage} to ${outputLanguage}`
    )
  );
  execCommand(
    `trans -i ${fileName} -o ${fileName.replace(
      ".srt",
      `.${outputLanguage}.srt`
    )} -l ${inputLanguage} -t ${outputLanguage} -b -show-original n`,
    () => console.log(chalk.greenBright(`File ${fileName} was translated \n`))
  );
};

const translateAllFiles = (inputLanguage, outputLanguage) =>
  execCommand("ls", (stdout) => {
    const allSrtSubtitleFiles = extractFileNames(stdout, undefined, ".srt");

    allSrtSubtitleFiles.forEach((file) =>
      translateFile(file, inputLanguage, outputLanguage)
    );
  });

module.exports = { translateAllFiles };
