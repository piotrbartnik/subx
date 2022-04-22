#!/usr/bin/env node

const { program } = require("commander");
const { extractSubtitlesRun } = require("../src/extractSubtitles/index");
const { translateSrt } = require("../src/translateSrt/index");

extractSubtitlesRun();
translateSrt();
