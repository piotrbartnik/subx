const { execCommand, extractFileNames } = require("../utils");

const runExtraction = (track = 2, mpeg) => {
  if (mpeg) {
    const extractFromMpeg = (file) =>
      execCommand(`ffmpeg -i "${file}" "${file.replace("mp4", "srt")}"`, () =>
        console.log(`Subitles for ${file} extracted succesfully`)
      );

    execCommand("ls", (stdout) =>
      extractFileNames(stdout, undefined, "mp4", extractFromMpeg)
    );
    return;
  }

  if (!track) {
    throw new Error("Plese add track in args like --track 2");
  }

  execCommand("ls", (stdout) =>
    extractFileNames(stdout, track, "mkv", extractSubtitlesFromTrack)
  );
};

const extractSubtitlesFromTrack = (file, track) => {
  execCommand(
    `mkvextract tracks "${file}" ${track}:"${file.replace("mkv", "srt")}"`,
    () => console.log(`Subitles for ${file} extracted succesfully`)
  );
};

module.exports = { runExtraction };
