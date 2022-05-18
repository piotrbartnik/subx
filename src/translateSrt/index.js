#!/usr/bin/env node

const { program } = require("commander");
const { translateAllFiles } = require("./translateSrt.js");

const translateAllFilesRun = () => {
  program
    .option(
      "-i, --input-language <string>",
      "Input language of srt files. Defaults to eng"
    )
    .option(
      "-o, --output-language <string>",
      "Output language of srt files. Defaults to pol"
    );

  program.parse();

  const programOptions = program.opts();

  console.log(programOptions);

  translateAllFiles(
    programOptions?.["inputLanguage"],
    programOptions?.["outputLanguage"]
  );
};

translateAllFilesRun();
