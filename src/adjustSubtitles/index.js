#!/usr/bin/env node

const { program } = require("commander");
const { adjustAllSubtitles } = require("./adjustSubtitles");

const adjustAllSubtitlesRun = () => {
  program.option("-n, --name <string>", "custom subtitle name");

  program.parse();

  const programOptions = program.opts();

  adjustAllSubtitles(programOptions?.name);
};

adjustAllSubtitlesRun();
