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
  .command("prerequisites", "Check if needed software is installed", {
    executableFile: resolve(__dirname, "../src/prerequisites/index.js"),
  })
  .command("extract-subtitles", "Extract subtitle in srt from a given track", {
    executableFile: resolve(__dirname, "../src/extractSubtitles/index.js"),
  })
  .command("translate-subtitles", "Translate srt subtitles", {
    executableFile: resolve(__dirname, "../src/translateSrt/index.js"),
  })
  .command(
    "adjust-subtitles",
    "Adjust subtitles timesamps and remove original subtitle",
    {
      executableFile: resolve(__dirname, "../src/adjustSubtitles/index.js"),
    }
  )
  .command("rename-subtitles", "Rename subtitles", {
    executableFile: resolve(__dirname, "../src/renameAllSrt/index.js"),
  })
  .command("adjust-timestamps", "Adjust subtitles timestamp", {
    executableFile: resolve(__dirname, "../src/adjustTimestamps/index.js"),
  })
  .command("vobsub-to-srt", "Resolve vob sub subtitles to srt", {
    executableFile: resolve(__dirname, "../src/vobSubToSrt/index.js"),
  });

program.parse();
