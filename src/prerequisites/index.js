#!/usr/bin/env node

const { checkPrerequisites } = require("./prerequisites.js");

const checkPrerequisitesRun = () => {
  checkPrerequisites();
};

checkPrerequisitesRun();
