#!/usr/bin/env node

const { program } = require("commander");
const { runExtraction } = require("./extractSubtitles");

const extractSubtitlesRun = () => {
  program
    .command("extract-subtitles")
    .description("Extract subtitle in srt from a given track")
    .option(
      "-t, --track <number>",
      "track of subtitle in mkv file. Defaults to 2"
    );

  program.parse();

  const trackFromArgs = program.args[2];

  if (program.args[0] === "extract-subtitles") {
    runExtraction(trackFromArgs);
  }
};

module.exports = { extractSubtitlesRun };
