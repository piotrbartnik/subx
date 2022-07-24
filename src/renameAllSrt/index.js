#!/usr/bin/env node
const { program } = require("commander");

const { renameAllSubtitles } = require("./renameAllSrt");

const renameAllSubtitlesRun = () => {
  program.requiredOption(
    "-p, --file-pattern <string>",
    "File patter from file name to extract - usuall as episode number. Example: 'subx rename-subtitles -p '.*E(\\d{2}).*''"
  );

  program.parse();

  const programOptions = program.opts();

  renameAllSubtitles(programOptions?.["filePattern"]);
};

renameAllSubtitlesRun();
