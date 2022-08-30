#!/usr/bin/env node
const { program } = require("commander");

const { renameAllSubtitles } = require("./renameAllSrt");

const renameAllSubtitlesRun = () => {
  program.requiredOption(
    "-p, --file-pattern <string>",
    'File patter from file name to extract - usually as episode number. Example: subx rename-subtitles -p ".*E(\\d{2}).*". First regexp group will be taken as new subtitle name'
  );

  program.parse();

  const programOptions = program.opts();

  renameAllSubtitles(programOptions?.["filePattern"]);
};

renameAllSubtitlesRun();
