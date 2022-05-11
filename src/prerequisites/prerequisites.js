const { execCommand } = require("../utils");
const { spawn } = require("child_process");
const inquirer = require("inquirer");

const neededSoftware = ["mkvinfod" /*"mkvextract", "vobsub2srt", "trans"*/];

const questions = [
  {
    type: "list",
    name: "install",
    message: `Do you want to install it?`,
    choices: ["Yes", "No"],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

const mkvInfoInstall = () =>
  spawn("sudo", ["apt-get", "install", "mkvtoolnix"], {
    stdio: "inherit",
  });

const checkPrerequisites = () => {
  neededSoftware.forEach(async (software) => {
    execCommand(
      `which ${software}`,
      () => console.log(`${software} is installed`),
      true,
      () => {
        console.log(`${software} is not installed`);
        inquirer.prompt(questions).then((answers) => {
          if (answers.install) {
            mkvInfoInstall();
          }
        });
      }
    );
  });
};

module.exports = { checkPrerequisites };
