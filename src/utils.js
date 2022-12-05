const { exec } = require("child_process");

const execCommand = async (command, fn, suprassError, errorFn) =>
  exec(command, (err, stdout) => {
    if (err && !suprassError) {
      console.error(err);
    } else if (err && suprassError) {
      errorFn(err);
    } else {
      fn(stdout);
    }
  });

const extractFileNames = (stdout, track, filetype = "mkv", actionFn) => {
  const allFiles = stdout.split("\n").filter((file) => file.match(filetype));

  if (actionFn) {
    allFiles.forEach((file) => actionFn(file, track));
  }

  return allFiles;
};

module.exports = { execCommand, extractFileNames };
