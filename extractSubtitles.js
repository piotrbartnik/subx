const { execCommand, extractFileNames } = require("./execCommand");
var args = process.argv.slice(2);

const trackFromArgs = args[0]?.split("=")[1];

const runExtraction = (track) => {
  if (!track) {
    throw new Error("Plese add track in args like -track=2");
  }

  execCommand("ls", (stdout) =>
    extractFileNames(stdout, track, ".mkv", extractSubtitlesFromTrack)
  );
};

const extractSubtitlesFromTrack = (file, track) => {
  execCommand(
    `mkvextract tracks ${file} ${track}:${file.replace("mkv", "")}`,
    (stdout) => console.log(`stdout: ${stdout}`)
  );
};

runExtraction(trackFromArgs);
