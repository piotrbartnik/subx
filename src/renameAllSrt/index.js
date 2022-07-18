#!/usr/bin/env node
const { program } = require("commander");

const { renameAllSubtitles } = require("./renameAllSrt");

const renameAllSubtitlesRun = () => {
  program.option(
    "-p, --file-pattern <string>",
    "File patter from file name to extract usuall as episode number"
  );

  program.parse();

  const programOptions = program.opts();

  renameAllSubtitles(programOptions?.["filePattern"]);
};

renameAllSubtitlesRun();
