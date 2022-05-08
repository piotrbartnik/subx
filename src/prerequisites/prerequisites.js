const { execCommand } = require("../utils");

const neededSoftware = ["mkvinfo", "mkvextract", "vobsub2srt", "trans"];

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
