#!/usr/bin/env node

const { program } = require("commander");
const { resolve } = require("path");
const CFonts = require("cfonts");

CFonts.say("subX", {
  font: "3d",
  align: "left",
  colors: ["red", "blue"],
  letterSpacing: 4,
  space: true,
  maxLength: "0",
  env: "node",
});

program
  .name("subx")
  .version("0.1.0")
  .description(
    "Extract, translate and adjust srt subitle files from mkv movies"
  )
  .command("extract-subtitles", "Extract subtitle in srt from a given track", {
    executableFile: resolve(__dirname, "../src/extractSubtitles/index.js"),
  })
  .command("translate-srt", "Translate srt subtitles", {
    executableFile: resolve(__dirname, "../src/translateSrt/index.js"),
  });

program.parse();
