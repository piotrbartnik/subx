#!/usr/bin/env node

const { program } = require("commander");
const { translateAllFiles } = require("./translateSrt.js");

const translateAllFilesRun = () => {
  program.option(
    "-i, --input-language <string>",
    "-o, --output-language <string>",
    "Input language of srt files. Defaults to eng"
  );

  program.parse();

  const programOptions = program.opts();

  translateAllFiles(
    programOptions?.["input-language"],
    programOptions?.["output-language"]
  );
};

translateAllFilesRun();
