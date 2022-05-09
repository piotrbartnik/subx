const { execCommand } = require("../utils");
const inquirer = require("inquirer");

const neededSoftware = ["mkvinfofd" /*"mkvextract", "vobsub2srt", "trans"*/];

const questions = [
  {
    type: "list",
    name: "installation",
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
          console.log("\nOrder receipt:");
          console.log(JSON.stringify(answers, null, "  "));
        });
      }
    );
  });
};

module.exports = { checkPrerequisites };
