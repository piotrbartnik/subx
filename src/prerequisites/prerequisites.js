const { execCommand } = require("../utils");

const neededSoftware = ["mkvinfo"];

const checkPrerequisites = () => {
  neededSoftware.forEach(async (software) => {
    execCommand(
      `which ${software}`,
      () => console.log(`${software} is installed`),
      true,
      () => console.log(`${software} is not installed`)
    );
  });
};

module.exports = { checkPrerequisites };
