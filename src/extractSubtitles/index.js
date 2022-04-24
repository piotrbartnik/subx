#!/usr/bin/env node

const { program } = require("commander");
const { runExtraction } = require("./extractSubtitles");

const extractSubtitlesRun = () => {
  program.option(
    "-t, --track <number>",
    "track of subtitle in mkv file. Defaults to 3"
  );

  program.parse();

  const programOptions = program.opts();

  runExtraction(programOptions?.track);
};

extractSubtitlesRun();
