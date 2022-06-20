#!/usr/bin/env node

const { replaceAllWrongTimestamps } = require("./replaceWrongTimestampInSrt");

const replaceAllWrongTimestampsRun = () => {
  replaceAllWrongTimestamps();
};

replaceAllWrongTimestampsRun();
