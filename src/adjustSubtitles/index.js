#!/usr/bin/env node

const { program } = require("commander");
const { adjustAllSubtitles } = require("./adjustSubtitles");

const adjustAllSubtitlesRun = () => {
  program.option(
    '-n, --name <string>", "custom subtitle name. Can be used with [episode] keyword. Example - if subtitles are renamed to 01.srt you can use command subx adjust-subtitles -n "Because of Our Love EP[episode]". Then each subsequent number will be put in [episode] place'
  );

  program.parse();

  const programOptions = program.opts();

  adjustAllSubtitles(programOptions.name);
};

adjustAllSubtitlesRun();
