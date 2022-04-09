const { execCommand, extractFileNames } = require("./execCommand");
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
  execCommand(`vobsub2srt ${fileName}`, (stdout) => {
    console.log(chalk.green(`stdout: successfully created srt for ${file}`));
    execCommand(`rm -rf ${fileName}.idx`, (stdout) =>
      console.log(`removed ${fileName}.idx`)
    );
    execCommand(`rm -rf ${fileName}.sub`, (stdout) =>
      console.log(`removed ${fileName}.sub`)
    );
  });
};

convertAllToSrt();
