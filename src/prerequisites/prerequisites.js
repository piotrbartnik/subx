const { execCommand } = require("../utils");
const { spawn } = require("child_process");
const inquirer = require("inquirer");

const neededSoftware = ["mkvinfofd" /*"mkvextract", "vobsub2srt", "trans"*/];

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
            const ls = spawn("ls", ["-lh", "/usr"]);

            ls.stdout.on("data", function (data) {
              console.log("stdout: " + data.toString());
            });

            ls.stderr.on("data", function (data) {
              console.log("stderr: " + data.toString());
            });

            ls.on("exit", function (code) {
              console.log("child process exited with code " + code.toString());
            });
          }
        });
      }
    );
  });
};

module.exports = { checkPrerequisites };
