const { execCommand, extractFileNames } = require("./utils");

const runExtraction = (track = 2) => {
  if (!track) {
    throw new Error("Plese add track in args like --track 2");
  }

  execCommand("ls", (stdout) =>
    extractFileNames(stdout, track, "mkv", extractSubtitlesFromTrack)
  );
};

const extractSubtitlesFromTrack = (file, track) => {
  execCommand(
    `mkvextract tracks ${file} ${track}:${file.replace("mkv", "srt")}`,
    (stdout) => console.log(`stdout: ${stdout}`)
  );
};

module.exports = { runExtraction };
