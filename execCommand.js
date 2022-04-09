const { exec } = require("child_process");

const execCommand = (command, fn) => {
  exec(command, (err, stdout) => {
    if (err) {
      console.error(err);
    } else {
      fn(stdout);
    }
  });
};

const extractFileNames = (stdout, track, filetype = ".mkv", actionFn) => {
  const movieFiles = stdout.split("\n").filter((file) => file.match(filetype));

  if (actionFn) {
    movieFiles.forEach((movie) => actionFn(movie, track));
  }

  return movieFiles;
};

module.exports = { execCommand, extractFileNames };
