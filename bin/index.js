#!/usr/bin/env node

const { program } = require("commander");
const { resolve } = require("path");

program.command(
  "extract-subtitles",
  "Extract subtitle in srt from a given track",
  {
    executableFile: resolve(__dirname, "../src/extractSubtitles/index.js"),
  }
);

program.parse();
