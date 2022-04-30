const { execCommand, extractFileNames } = require("./utils");
const chalk = require("chalk");

const convertAllToSrt = () =>
  execCommand("ls", (stdout) => {
    const allFiles = extractFileNames(stdout).filter((file) =>
      file.match(/.mkv$/)
    );

    allFiles.forEach((movie) => convertSingleFileFromVobSubToSrt(movie));
  });

const convertSingleFileFromVobSubToSrt = (file) => {
  const fileName = file.replace(".mkv", "");
  execCommand(`vobsub2srt ${fileName}`, () => {
    console.log(chalk.green(`stdout: successfully created srt for ${file}`));
    execCommand(`rm -rf ${fileName}.idx`, () =>
      console.log(chalk.cyan(`removed ${fileName}.idx`))
    );
    execCommand(`rm -rf ${fileName}.sub`, () =>
      console.log(chalk.cyan(`removed ${fileName}.sub\n`))
    );
  });
};

module.exports = { convertAllToSrt };
