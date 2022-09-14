#!/usr/bin/env node

const { program } = require("commander");
const { adjustAllTimestamps } = require("./adjustTimestamps");

const adjustAllTimestampsRun = () => {
  program.option("-s, --seconds <string>", "number of seconds to adjust");

  program.parse();

  const programOptions = program.opts();

  adjustAllTimestamps(programOptions.seconds);
};

adjustAllTimestampsRun();
