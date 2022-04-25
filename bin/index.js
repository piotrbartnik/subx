#!/usr/bin/env node

const { program } = require("commander");
const { resolve } = require("path");

program
  .name("subx")
  .version("0.1.0")
  .description(
    "Extract, translate and adjust srt subitle files from mkv movies"
  )
  .command("extract-subtitles", "Extract subtitle in srt from a given track", {
    executableFile: resolve(__dirname, "../src/extractSubtitles/index.js"),
  });

program.parse();
