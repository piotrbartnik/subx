#!/usr/bin/env node

const { program } = require("commander");
const { runExtraction } = require("../extractSubtitles");

program
  .command("extract")
  .description("Extract subtitle in srt from a given track")
  .option(
    "-t, --track <number>",
    "track of subtitle in mkv file. Defaults to 2"
  );

program.parse();

const trackFromArgs = program.args[1];

if (program.args[0] === "extract") {
  runExtraction(trackFromArgs);
}
